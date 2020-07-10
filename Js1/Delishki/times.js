//Mini calendaer and watch functionality here 
const clock = document.querySelector('.time__clock');
const date = document.querySelector('.time__date');
const timeBtn = document.querySelector('.fa-clock');
const closeTime = document.querySelector('.time__close');

const time = () => {
    const now = new Date();

    const options = {
        weekday:'short',
        year: 'numeric',
        month: 'long',
        day:'2-digit',
        hour:'2-digit',
        minute:'2-digit',
        second:'numeric'
    };

    const today = now.toLocaleDateString('ru', options);
    let month = now.getMonth();

    switch (month) {
        case 0 :
            month = 'Январь';
            break;
        case 1 :
            month = 'Февраль';
            break;
        case 2 :
            month = 'Март';
            break;
        case 3 :
            month = 'Апрель';
            break;
        case 4 :
            month = 'Май';
            break;
        case 5 :
            month = 'Июнь';
            break;
        case 6 :
            month = 'Июль';
            break;
        case 7 :
            month = 'Август';
            break;
        case 8 :
            month = 'Сентябрь';
            break;
        case 9 :
            month = 'Окттябрь';
            break;
        case 10 :
            month = 'Ноябрь';
            break;
        case 11 :
            month = 'Декабрь';
            break;
    }

    const time1 = today.slice(-8);
    const weekday = today.slice(0, 2);
    const day = today.slice(4,6);
    const year = today.slice(12,16);

    clock.innerHTML = time1;
    date.innerHTML = `${weekday} ${day} ${month} ${year}`;

};

setInterval(time,1000);

timeBtn.addEventListener('click', (e) => {
    closeTime.parentElement.style.display = 'block';
});

closeTime.addEventListener('click', () => {
    closeTime.parentElement.style.display = 'none';
});

