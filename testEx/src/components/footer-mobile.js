const dropDownTriggers = document.querySelectorAll('.footer__item-title'); 

dropDownTriggers.forEach(item => {
    let dropDownContent = document.getElementById(item.dataset.set);
    item.addEventListener('click' , ()=> {

        dropDownContent.style.display === 'block' ? dropDownContent.style.display = 'none' 
                                                  : dropDownContent.style.display = "block" ;

    });
})



