export class View {
  constructor() {
    this.location = document.getElementById('weather-location'); // location
    this.description = document.getElementById('weather-description'); // description
    this.temperature = document.getElementById('temperature'); // temperature
    this.temperatureMax = document.getElementById('temperature-max'); // temperature max
    this.temperatureMin = document.getElementById('temperature-min'); // temperature min
    this.img = document.getElementById('image');
    this.humidity = document.getElementById('weather-humidity'); // humidity
    this.wind = document.getElementById('weather-wind'); // wind
  }

  renderData(weather) {
    this.location.textContent = weather.name + ' - ' + weather.sys.country;
    this.description.textContent = weather.weather[0].description;
    this.temperature.textContent = weather.main.temp + '°C';
    this.temperatureMax.textContent = weather.main.temp_max + '°C';
    this.temperatureMin.textContent = weather.main.temp_min + '°C';
    this.humidity.textContent = weather.main.humidity + '%';
    this.img.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    this.wind.textContent = weather.wind.speed + ' m/s';
  }
}

// http://openweathermap.org/img/wn/10d@2x.png
