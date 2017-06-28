const Weather = require('./../js/weather.js').weatherModule;

const displayHumidity = (city, humidity) => $("#humidity").text(`The humidity in ${city} is ${humidity}%`);
const displayKelvin = (city, kelvin) => $("#kelvin").text(`It is ${kelvin} degrees kelvin in ${city}`);
const displayFahrenheit = (city, fahrenheit) => $("#fahrenheit").text(`It is ${fahrenheit} degrees fahrenheit in ${city}`);
const displayWindSpeed = (city, windSpeed) => $("#windspeed").text(`The wind speed in ${city} is ${windSpeed} MPH`);

$(() => {
  const weather = new Weather();
  $("#city-form").submit((e) => {
    e.preventDefault();
    const city = $("#city-input").val();
    $("#city-input").val('');
    weather.displayWeather(city, displayHumidity, displayKelvin, displayWindSpeed, displayFahrenheit);
  });
});
