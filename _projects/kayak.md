---
title: 'KAYAK'
subtitle: 'Product designer, Apps & Personalization'
date: 2018-09-30 00:00:00
description: This page is a demo that shows everything you can do inside portfolio and blog posts.
featured_image: '/images/kayak1.png'
---

<!-- PASSWORD LOGIC -->
<script>
var encryptedPassword = `{{ site.password.kayak-encrypted }}`;
canAccess = () => {
    var password = document.getElementById('password').value;
    if (!password) {
        alert('Please enter a valid password');
        return;
    }
    
    sha256(password).then(attempt => {
        if (attempt === encryptedPassword) {
            document.getElementById('modal-hide').classList.remove('display-none');
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

</script>
<!-- PASSWORD LOGIC -->

<!-- PASSWORD POPUP -->
<div id="modal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="redirect()">&times;</span>
        <div class="modal-password">
            <p class="modal-password-p">Please enter password to continue</p>
            <input id='password' class="modal-password-input" type='password' />
            <button type="button" class="modal-password-button" onclick="canAccess()">
                Submit
            </button>
        </div>
    </div>
</div>
<!-- PASSWORD POPUP -->

<div id="modal-hide" class="display-none">
    <img src="/images/kayak2.png"/>
    <h2>Coming soon...</h2>
</div>
