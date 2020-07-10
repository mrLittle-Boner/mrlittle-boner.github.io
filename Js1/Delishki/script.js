const addTodo = document.querySelector('.todos__add');
const todoList = document.querySelector('.todos__list');
const wisdom = document.querySelector('.wisdom');


// Add a new item into todo list ONLY if string is not empty

let delishky = [];

addTodo.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputText = document.querySelector('.todos__text');
    const inputTextTrim = inputText.value.trim();

    const template = `
    <li class="todos__item">
            ${inputTextTrim}
        <i class="far fa-trash-alt trashcan"></i>
    </li>`;

    inputTextTrim ? todoList.innerHTML += template : false;

    delishky.push(inputTextTrim);
    inputText.value = "";

    localStorage.setItem('todos', delishky);
});

//Deleting item from todo list use trashcan icon
todoList.addEventListener('click', (e) => {
    // const trashcan = document.querySelectorAll('.trashcan');

    if( e.target.classList.contains('trashcan')) {
        e.target.parentElement.remove();
    }

    if( e.target.classList.contains('fa-check-circle')) {
        e.target.nextElementSibling.classList.toggle('done');
    }

});


// Folk wisdom functionality here

const wisdoms = [
    // "Не имей сто рублей, а poshel na huy",
    "\"Сделал дело - ",
    "\"Лучше синица в руке, чем ",
    "\"Тише едешь, ",
    "\"Не все то золото, что ",
    "\"Выменял шило на мыло ",
    "\"После драки ",
    "\"Одна голова хорошо, а две ",
    "\"В тихом омуте черти ",
    "\"Муж и жена - ",
    "\"И волки сыты, и овцы "
];

let wisdomCounter = 0;

const tellWisdom = (arr) => {

    setInterval(function(){
        if(wisdomCounter < 6 ) {
            wisdom.textContent = (arr[wisdomCounter] + `poshel na huy" ${'\251'}Камфуций`);
        } else {
            wisdom.textContent = (arr[wisdomCounter] + `idut na huy" ${'\251'}Cтахтем`);
        }

        wisdomCounter++;
        if (wisdomCounter >= 10) {
            wisdomCounter = 0;
        };

    }, 10000);

    return true;
};
tellWisdom(wisdoms);

