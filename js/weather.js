const apiKey = require('./../.env').apiKey;

function Weather() {
}

Weather.prototype.displayWeather = function(city, displayHumidity) {
  $.get(`http://api.openweathermap.org/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => displayHumidity(city, response.main.humidity))
    .fail(error => $("#humidity").text(error.responseJSON.message));
};

exports.weatherModule = Weather;
