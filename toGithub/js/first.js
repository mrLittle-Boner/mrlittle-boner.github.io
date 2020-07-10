const menu = document.querySelector('.burger');
const nav = document.querySelector('.nav');

menu.addEventListener('click', e => {

    if(nav.style.top == '0px'){
        nav.style.top = '-150%';
    } else {
        nav.style.top = '0px';
    }

})