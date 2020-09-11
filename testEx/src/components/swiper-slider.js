let mySwiper = new Swiper('.swiper-container' , {
    direction: 'horizontal',
});

let portfolioSlider = new Swiper('.swiper-container-portfolio' , {
    containerModifierClass : 'swiper-container-portfolio',
    loop: true,
    speed: 800,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
    },
    
    autoplay: {
        delay: 7000,
    },
});

let headerSlider = new Swiper('.swiper-container-menu' , {
    containerModifierClass : 'swiper-container-menu',
    slidesPerView: 8,
    slidesPerGroup: 3,
    loop:false,
    noSwipingClass: 'swiper-no-swiping',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        766: {
            slidesPerView: 6,
            slidesPerGroup: 5,
        },
        850: {
            slidesPerView: 7,
            slidesPerGroup: 4,
        },
        900: {
            slidesPerView: 8,
            slidesPerGroup: 3,
        }
    }
});

const sliderSlides = document.querySelectorAll('.header__slide');
const buttonNext = document.querySelector('.slider-butt-next');
const buttonPrev = document.querySelector('.slider-butt-prev');


const sliderHandler = () => {
    if(document.body.clientWidth <= 1100) {
        sliderSlides.forEach(item => {
            item.classList.add('swiper-slide');
        });
        buttonNext.classList.add('swiper-button-next');
        buttonPrev.classList.add('swiper-button-prev');

    } else {
        sliderSlides.forEach(item => {
            item.classList.remove('swiper-slide');
        });
        buttonNext.classList.remove('swiper-button-next');
        buttonPrev.classList.remove('swiper-button-prev');
    }
};

window.addEventListener('load' , sliderHandler);
window.addEventListener('resize' , sliderHandler);



// mySwiper.destroy(deleteInstance, cleanStyles);
// const sliderHandler = () => {
//     if(document.body.clientWidth <= 1100) {
//         sliderSlides.forEach(item => {
//             item.classList.add('swiper-slide');
//         });
//         buttonNext.classList.add('swiper-button-next');
//         buttonPrev.classList.add('swiper-button-prev');

//         let headerSlider = new Swiper('.swiper-container-menu' , {
//             containerModifierClass : 'swiper-container-menu',
//             slidesPerView: 8,
//             slidesPerGroup: 3,
//             loop:false,
//             noSwipingClass: 'swiper-no-swiping',
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },
//             breakpoints: {
//                 766: {
//                     slidesPerView: 6,
//                     slidesPerGroup: 5,
//                 },
//                 850: {
//                     slidesPerView: 7,
//                     slidesPerGroup: 4,
//                 },
//                 900: {
//                     slidesPerView: 8,
//                     slidesPerGroup: 3,
//                 }
//             }
//         });
//     } else {
//         headerSlider.destroy(false, true);
//         sliderSlides.forEach(item => {
//             item.classList.remove('swiper-slide');
//         });
//         buttonNext.classList.remove('swiper-button-next');
//         buttonPrev.classList.remove('swiper-button-prev');
//     }
// };