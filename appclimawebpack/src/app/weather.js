export class Weather {
  constructor( city, countryCode ) {
    this.apikey = '';
    this.city = city;
    this.countryCode = countryCode;
  }
  async getWeather () {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    console.log(data)
    return data;
  }

  changeLocation (city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}

// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=007ea7b80f324a82609b1f8173d3b9c6
