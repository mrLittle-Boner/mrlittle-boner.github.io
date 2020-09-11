const BRAND_LIST = [
    {
        id:31,
        title: 'Abat',
        imgsrc:'./assets/imgs/brands/brand-abat.png',
    },
    {
        id:32,
        title: 'Atesy',
        imgsrc: './assets/imgs/brands/brand-atesy.png',
    },
    {
        id:33,
        title: 'HiCold',
        imgsrc:'./assets/imgs/brands/brand-hicold.png',
    },
    {
        id:34,
        title: 'Rational',
        imgsrc:'./assets/imgs/brands/brand-rational.png',
    },
    {
        id:35,
        title: 'Simeco',
        imgsrc: './assets/imgs/brands/brand-simeco.png',
    },
    {
        id:36,
        title: 'Все бренды',
    },
];
const brands = document.getElementById('brands__list');

function renderBrandList(list){
    let template = '';
    list.forEach(item => {
        if(item.id === 36) {
            template = `
                <li>
                    <a href="">
                        <span>Все бренды</span> 
                    </a>
                </li>
            `;

        } else {
            template = `
                <li>
                    <a href="">
                        <img src=${item.imgsrc} alt="link to ${item.title} brand products">
                    </a>
                </li>
            `;
        }

        brands.insertAdjacentHTML('beforeend', template);
    });
}

renderBrandList(BRAND_LIST);