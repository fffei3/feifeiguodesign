---
layout: null
---

var encryptedPassword = `{{ site.password.kayak-encrypted }}`;

canAccess = () => {
    var password = document.getElementById('password').value;
    if (!password) {
        alert('Please enter a valid password');
        return;
    }
    
    sha256(password).then(attempt => {
        if (attempt === encryptedPassword) {
            document.getElementById('content-hide').classList.remove('display-none');
            closeModal();
        } else {
            alert('Invalid password');
        }
    });
};

redirect = () => {
    window.location.replace("/");
};

closeModal = () => {
    document.getElementById('modal').classList.add('display-none');
};

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);                    

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
};