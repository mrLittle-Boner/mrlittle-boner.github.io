const OFFERS_LIST = [
    {
        id:21,
        title: 'Кафе,барам,ресторанам',
    },
    {
        id:22,
        title: 'Детскиим садам и школам',
    },
    {
        id:23,
        title: 'Таблет-питание',
    },
    {
        id:24,
        title: 'Для столовых',
    },
    {
        id:25,
        title: 'Для пищеблоков',
    },
    {
        id:26,
        title: 'Государственным заказчикам',
    },
    {
        id:27,
        title: 'Для магазинов',
    },
    {
        id:28,
        title: 'Для войсковых частей',
    },
    {
        id:29,
        title: 'Все предложения',
    },
];

const offersHolder = document.getElementById('offers__list');

function renderOffersList(list){
    let template = '';

    list.forEach(item => {

        template = `
            <li>
                <a href="">${item.title}</a>
            </li>
        `;

        offersHolder.insertAdjacentHTML('beforeend', template);
    });


}

renderOffersList(OFFERS_LIST);