const apiKey = require('./../.env').apiKey;

function Weather() {
}

Weather.prototype.displayWeather = function(city, displayHumidity, displayKelvin, displayWindSpeed) {
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => displayHumidity(city, response.main.humidity))
    .fail(error => $("#humidity").text(error.responseJSON.message));

  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => displayKelvin(city, response.main.temp))
    .fail(error => $("#kelvin").text(error.responseJSON.message));

  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => displayWindSpeed(city, response.wind.speed))
    .fail(error => $("#windspeed").text(error.responseJSON.message));
};

exports.weatherModule = Weather;
