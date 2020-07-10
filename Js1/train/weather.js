const apiKey = '8wK7IkGTaWh7WIgh9SIc18o4hsG1dsYh';

const getWeather = async (cityKey) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${cityKey}?apikey=${apiKey}`;

    const response = await fetch(base + query)
    const data = await response.json();

    return data[0];

};

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${apiKey}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}

// getCity("Moscow").then(data => {
//         return getWEather(data.Key);
//     }).then(data => {
//         console.log(data)
//     })
//     .catch(err => console.log(err));

