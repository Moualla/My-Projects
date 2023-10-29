const lorgerbox = document.querySelector('.lorger-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', function () {
        lorgerbox.classList.add('active');
    });
loginlink.addEventListener('click', function () {
        lorgerbox.classList.remove('active');
    });


