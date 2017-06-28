const Weather = require('./../js/weather.js').weatherModule;

let displayHumidity = (city, humidity) => $("#humidity").text(`The humidity in ${city} is ${humidity}%.`);

$(() => {
  const weather = new Weather();
  $("#city-form").submit((e) => {
    e.preventDefault();
    const city = $("#city-input").val();
    $("#city-input").val('');
    weather.displayWeather(city, displayHumidity);
  });
});