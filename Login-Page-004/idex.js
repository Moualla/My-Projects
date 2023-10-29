

const warpper = document.querySelector('.warpper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btn = document.querySelector('.btnlogin-popup');
const close= document.querySelector('.icon-close');



registerlink.addEventListener('click', ()=> {
    warpper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    warpper.classList.remove('active');
});

btn.addEventListener('click', ()=> {
    warpper.classList.add('active-popup');
});

close.addEventListener('click', ()=> {
    warpper.classList.remove('active-popup');
});