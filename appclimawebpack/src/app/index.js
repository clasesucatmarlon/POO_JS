const { Weather } = require('./weather');
const { View } = require('./view');
const { Store } = require('./store');

const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const weather = new Weather(city, countryCode);
const view = new View();

require('./index.css');
require('./index.css');


async function getWeather() {
  const data = await weather.getWeather();
  view.renderData(data);
}

const button = document.getElementById('weather-change-btn')
button.addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;
  weather.changeLocation(city, countryCode);
  storage.setLocationData(city, countryCode); 
  getWeather();
  e.preventDefault();
})

document.addEventListener('DOMContentLoaded', getWeather);
