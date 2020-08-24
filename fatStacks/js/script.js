const reportIncome = document.querySelector(".money__report-income");
const reportOutcome = document.querySelector(".money__report-outcome");
const moneyList = document.querySelector(".money__control");
const moneyListItem = document.querySelectorAll(".money__control-item");
const moneyListItemText = document.querySelector(".money__control-descr");
const moneyListItemNumber = document.querySelector(".money__control-move");
const moneyForm = document.querySelector(".money__flow");
const moneyInputText = document.querySelector(".money__flow-descr");
const moneyInputNumber = document.querySelector(".money__flow-number");
const moneyFormBtn = document.querySelector(".money__flow-btn");
const moneyBalance = document.querySelector(".money__balance");
const moneyClearBtn = document.querySelector(".money__clear");

let moneyMoves = [] || JSON.parse(localStorage.myMoney);


function render(arr){
    let template = "";
        if(!arr[0]) {
            template += `
                <div class="money__control-empty">Список пуст, пожалуйста, введите данные для расчёта</div>
            `;
        }
        arr.forEach(({ text , number}) => {
            template += `
                <li class="money__control-item ${parseFloat(number) > 0 ? "income" : "outcome"}">
                    <span class="money__control-btn">+</span>
                    <span class="money__control-descr">${text}</span>
                    <span class="money__control-move"> ${number} rub</span>
                </li>
            `;
        })
    
    moneyList.innerHTML = template;
};

function calculateReport(arr) {
    let incomeSum = 0;
    let outcomeSum = 0;

    arr.forEach(item => {
        parseFloat(item.number) > 0 ? incomeSum += parseFloat(item.number) : outcomeSum += parseFloat(item.number);
    })

    reportIncome.innerText = `${incomeSum} rub`;
    reportOutcome.innerText = `${outcomeSum} rub`;

    moneyBalance.innerText = `${incomeSum + outcomeSum} rub`;

    if(parseFloat(moneyBalance.innerText) > 0 ) {
        moneyBalance.classList.remove("outcome");
        moneyBalance.classList.add("income");
    } else {
        moneyBalance.classList.remove("income");
        moneyBalance.classList.add("outcome");
    }
} 

function addToLocalStorage(arr) {
    localStorage.myMoney = JSON.stringify(arr);
}

function takeFromLocalStorage(arr) {
    localStorage.myMoney ? arr = JSON.parse(localStorage.myMoney) : arr = [];
    moneyMoves = arr;
    render(arr);
    calculateReport(arr);
}

moneyFormBtn.addEventListener("click", e => {
    e.preventDefault();

    if(moneyInputText.value && +moneyInputNumber.value) {
        moneyMoves.unshift({
            text: `${moneyInputText.value}`,
            number: `${moneyInputNumber.value}`
        });
    } else {
        alert("Пожалуйста, введите корректные данные в соответсвующие поля");
    }
    
    render(moneyMoves);

    moneyInputText.value = "";
    moneyInputNumber.value = "";

    calculateReport(moneyMoves);
    addToLocalStorage(moneyMoves);
    document.location.reload();
})

takeFromLocalStorage(moneyMoves);

let moneyItemDelete = document.querySelectorAll(".money__control-btn");

moneyItemDelete.forEach((el,index) => {
    el.addEventListener("click" , (e) => {

        moneyMoves.splice(index, 1);
        render(moneyMoves);
        calculateReport(moneyMoves);
        addToLocalStorage(moneyMoves);
        document.location.reload();
    })
})

moneyClearBtn.addEventListener("click", (e) => {
    moneyMoves = [];
    localStorage.myMoney = "";
    render(moneyMoves);
    calculateReport(moneyMoves);
});
