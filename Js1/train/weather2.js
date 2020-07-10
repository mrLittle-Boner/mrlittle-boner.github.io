const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUi = (data) => {

    const { cityDets, weather } = data;

    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
    `;

    card.classList.contains('d-none')
        ? card.classList.remove('d-none')
        : false;


    let timeSrc = weather.IsDayTime
        ? 'https://via.placeholder.com/400x300/67b3fb/FFFFFF/?text=Its+Day+Time'
        : 'https://via.placeholder.com/400x300/09083c/FFFFFF/?text=Its+Night+Time';
    time.setAttribute('src', timeSrc);

    const iconSrc = `/train/weatherIcons/${weather.WeatherIcon}.png`;
    icon.setAttribute('src', iconSrc);

}

const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return { cityDets, weather };
};

cityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUi(data))
        .catch(err => console.log(err));

    localStorage.setItem('city', city);

});             

localStorage.getItem('city') ? updateCity(localStorage.getItem('city'))
.then(data => updateUi(data)) : false;