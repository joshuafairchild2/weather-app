const Weather = require('./../js/weather.js').weatherModule;

const displayHumidity = (city, humidity) => $("#humidity").text(`The humidity in ${city} is ${humidity}%.`);
const displayKelvin = (city, kelvin) => $("#kelvin").text(`It is ${kelvin} degrees kelvin in ${city}`);

$(() => {
  const weather = new Weather();
  $("#city-form").submit((e) => {
    e.preventDefault();
    const city = $("#city-input").val();
    $("#city-input").val('');
    weather.displayWeather(city, displayHumidity, displayKelvin);
  });
});
