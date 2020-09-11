const dropDownTrigger = document.querySelector('.header-search__dropdown-trigger');
const dropDownContent = document.querySelector('.header-search__dropdown-content');
const mailPopUpTrigger = document.querySelector('.mail');
const mailPopUpWindow = document.querySelector('.mail__copy');
const phoneCallbackTrigger = document.querySelector('.callback');
const phoneCallbackWindow = document.querySelector('.callback__container');

function closeDrop(){
    dropDownContent.classList.remove('header-search__dropdown-content--active');
        setTimeout(()=> {
            dropDownContent.style.display = 'none';
        },400)
}
function openDrop(){
    dropDownContent.style.display = 'block';
    setTimeout(()=> {
        dropDownContent.classList.add('header-search__dropdown-content--active');
    } ,10)
}

dropDownTrigger.addEventListener('click', e => {
    if(dropDownContent.style.display === 'block') {
        closeDrop();
    } else {
        openDrop();
    }
});

dropDownContent.addEventListener('click', e => {
    if(e.target.tagName === "LI"){
    dropDownTrigger.textContent = e.target.textContent;
    closeDrop();
    }
});

mailPopUpTrigger.addEventListener('click', (e)=> {
    mailPopUpWindow.style.display === 'block' ? mailPopUpWindow.style.display = 'none' : mailPopUpWindow.style.display = 'block'; 
})

phoneCallbackTrigger.addEventListener('mouseover' , (e) => {
    phoneCallbackWindow.style.display = "block";
});

phoneCallbackTrigger.addEventListener('click' , (e) => {
    if(e.target.classList.contains('callback__close') || e.target.classList.contains('callback__bg')) {
        phoneCallbackWindow.style.display = "none";
    }
});