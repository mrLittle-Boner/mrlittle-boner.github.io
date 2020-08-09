const form = document.querySelector("form");
const card = document.querySelector(".card");
const imgDaytime = document.querySelector(".card__img-item");
const cardInfo = document.querySelector(".card__info");
const formInput = document.querySelector(".form__input");


//Getting data from weather openweathermap.org and return it
const getInfo =  async (city) => {
    const apiKey = "&appid=35f8c24864754347b2719166ba5dcee1";
    const base = "https://api.openweathermap.org/data/2.5/weather?q=";
    const units = "&units=metric";
    
    const response = await fetch(base + city + units + apiKey);
    if(response.status !== 200) {
        throw new Error('error in fetching data');
    }
    const aswer = await response.json();

    return aswer;
};

//This function takes data object wich taken from getInfo and Updating UI
const updateCard = (data) => {

    const cardTemplate = `
    <div class="card__city">${data.name}</div>
    <div class="card__condition">${data.weather[0].main}</div>
    <div class="card__temp">${Math.round(data.main.temp)}&deg;C</div>
    `;

    // In this lines of code Iam try to check witch daytime is for update image like its day or night in city u looking for , for me the problem is this api returns all time in UNIX format and Iam find what i can take sunrise time and sinset time and compare to time now
    const dayTime = data.dt; //Time Now 
    const sunrise = data.sys.sunrise; //Sunset time
    const sunset = data.sys.sunset; //sunrise time
    let daytimeImage = "";

    //Check if Time Now between sunrise and sunset and set img to day if its not set image to night
    dayTime > sunrise && dayTime < sunset 
    ? daytimeImage = "./imgs/day.jpg"
    : daytimeImage = "./imgs/night.jpg";
    
    imgDaytime.setAttribute("src", daytimeImage); 

    cardInfo.innerHTML = cardTemplate; //Updating html for weather Info
    card.style.display = "block"; //Show card when function is called

};

// Form takes value from input and call function with this City to get weather info and set city to localstorage
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = formInput.value.trim();

    getInfo(city).then(data => updateCard(data)).catch(err => console.log(err));

    localStorage.lastCity = city;
    form.reset();
});

//Little Check if local storage has value and Upadte Ui with this city
if(localStorage.lastCity) {
    getInfo(localStorage.lastCity).then(data => updateCard(data)).catch(err => console.log(err));
}


