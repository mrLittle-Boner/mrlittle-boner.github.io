const CATALOGUE_ITEMS = [
    {
        id:1,
        title: "Тепловое",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-heaters.png"
    },
    {
        id:2,
        title: "Холодильное",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-cold.png"
    },
    {
        id:3,
        title: "Электромеханическое",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-electricity.png"  
    },
    {
        id:4,
        title: "Посудомоечное",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-dishwashers.png"
    },
    {
        id:5,
        title: "Хлебопекарное",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-bread.png"
    },
    {
        id:6,
        title: "Вспомогательное",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-weight.png"
    },
    {
        id:7,
        title: "Нейтральное",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-neutral.png"
    },
    {
        id:8,
        title: "Для фаст фуда",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-fastfood.png"
    },
    {
        id:9,
        title: "Для залов",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-banket.png"
    },
    {
        id:10,
        title: "Линии раздачи",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-lines.png"
    },
    {
        id:11,
        title: "Для магазинов",
        imgsrc: "./assets/imgs/header-products/menu-catalogue-bar.png"
    },
];

function renderCatalogue(catalogue) {
    const menuCatalogue = document.getElementById('header-cotalogue');

    let template = ``;

    catalogue.forEach(item => {
        template = `
        <li class="header__slide swiper-slide">
            <a href="#">
                <figure>
                    <img src=${item.imgsrc} alt=${item.title} +" оборудование">
                    <figcaption>${item.title}</figcaption>
                </figure>
            </a>
        </li> 
        `;
        menuCatalogue.insertAdjacentHTML('beforeend', template);
    });

}

renderCatalogue(CATALOGUE_ITEMS);

const headerBottomMenu = document.querySelector('.header__bottom');

function hideMenu() {
    headerBottomMenu.classList.add('hide-menu');
};

function showMenu() {
    headerBottomMenu.classList.remove('hide-menu');
};

let lastScrollTop = 0;

window.addEventListener('scroll', () => {


    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop) {
        hideMenu();
    } else {
        showMenu();
    }

    lastScrollTop = scrollTop;

});