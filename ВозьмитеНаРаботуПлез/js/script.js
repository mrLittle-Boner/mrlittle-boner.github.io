const productList = document.querySelector(".products__list");
const products = [
    {
        id : "el1",
        description: "Сказачное заморское явство",
        name : "Нямушка",
        type : "c фуа-гра",
        portions : "10 " ,
        gift : "мышь в подарок",
        isDisabled : false,
        isSelected: false,
        weight : "0,5",
        cta : `Чего сидишь? Порадуй котэ, <span class="buy-btn">купи.</span>`,
        contains : "Печень утки разварная с артишоками",
        disabledText : "Печалька c фуа-гра закончился"
    },
    {
        id : "el2",
        description: "Сказачное заморское явство",
        name : "Нямушка",
        type : "c рыбой",
        portions : "40 ",
        gift : "2 мыши в подарок",
        isDisabled : false,
        isSelected: true,
        weight: "2",
        cta : `Чего сидишь? Порадуй котэ, <span class="buy-btn">купи.</span>`,
        contains : "Головы щучьи с чесноком да свежайшая сёмгушка.",
        disabledText : "Печалька с рыбой закончился"
    },
    {
        id : "el3",
        description: "Сказачное заморское явство",
        name : "Нямушка",
        type : "c курой",
        portions : "100 ",
        gift : "5 мышей в подарок",
        isDisabled : true,
        isSelected: false,
        weight : "5",
        cta : `Чего сидишь? Порадуй котэ, <span class="buy-btn">купи.</span>`,
        contains : "Филе из цыплят с трюфелями в бульоне.",
        disabledText : "Печалька c курой закончился"
    }
];
let htmlTemplate = '';

function render(products) {
    products.forEach( ({ description,name,type,portions,weight,cta,contains,gift,isDisabled,disabledText }) => {

        if(isDisabled) {
            htmlTemplate += `
            <div class="card disabled">
                <div class="products__item">
                    <div class="products__item-descr">${description}</div>
                    <div class="products__item-name">${name}</div>
                    <div class="products__item-type">${type}</div>
                    <div class="products__item-portions"><span class="uccent">${portions}</span> порций</div>
                    <div class="products__item-gift"><span class="uccent"></span>${gift}</div>
                    <div class="products__item-image">
                        <img src="./imgs/Photo.png" alt="pretty fluffy cat">
                    </div>
                    <div class="products__item-weight">
                        <span class="weight-number">${weight}</span>
                        <span class="weight-type">кг</span>
                    </div>
                </div>  
                <div class="products__item-cta">${disabledText}</div>
            </div>
            `;
        } else {
            htmlTemplate += `
            <div class="card">
                <div class="products__item">
                    <div class="products__item-descr">${description}</div>
                    <div class="products__item-name">${name}</div>
                    <div class="products__item-type">${type}</div>
                    <div class="products__item-portions"><span class="uccent">${portions}</span> порций</div>
                    <div class="products__item-gift"><span class="uccent"></span>${gift}</div>
                    <div class="products__item-image">
                        <img src="./imgs/Photo.png" alt="pretty fluffy cat">
                    </div>
                    <div class="products__item-weight">
                        <span class="weight-number">${weight}</span>
                        <span class="weight-type">кг</span>
                    </div>
                    
                </div> 
                <div class="products__item-cta"><span></span>${cta}</div>               
                <div class="products__item-cta products__item-cta-selected">${contains}</div>               
            </div>
            `;
        }
        productList.innerHTML = htmlTemplate;
    })

}

render(products);

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const poopa = card.querySelector(".products__item-cta");
    const loopa = card.querySelector(".products__item-cta-selected");

    card.addEventListener('click', (e) => {
        if(e.target.closest(".card").classList.contains("disabled")){
            return false;
        }
        if(e.target.closest(".products__item")){
            card.classList.toggle("selected");
        }

        if(e.target.classList.contains("buy-btn")){
            card.classList.toggle("selected");
        }

        if(card.classList.contains("selected")) {
            poopa.style.display = "none";
            loopa.style.display = "block";
        } else {
            poopa.style.display = "block";
            loopa.style.display = "none";
        }
        
    })
})
