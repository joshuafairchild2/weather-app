const apiKey = require('./../.env').apiKey;
const Temperature = require('./../js/temperature.js').temperatureModule;
const tempConverter = new Temperature();

function Weather() {
}

Weather.prototype.displayWeather = function(city, displayHumidity, displayKelvin, displayWindSpeed, displayFahrenheit, displayCelsius) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => displayHumidity(city, response.main.humidity))
    .fail(error => $("#humidity").text(error.responseJSON.message));

  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
      const kelvinDegrees = response.main.temp;
      const fahrenheitDegrees = tempConverter.kelvinToFahrenheit(kelvinDegrees);
      const celsiusDegrees = tempConverter.kelvinToCelsius(kelvinDegrees);
      displayKelvin(city, kelvinDegrees);
      displayFahrenheit(city, fahrenheitDegrees);
      displayCelsius(city, celsiusDegrees);
    })
    .fail(error => $("#kelvin").text(error.responseJSON.message));

  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => displayWindSpeed(city, response.wind.speed))
    .fail(error => $("#windspeed").text(error.responseJSON.message));
};

exports.weatherModule = Weather;
