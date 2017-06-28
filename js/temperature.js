function Temperature() {

}

Temperature.prototype.kelvinToFahrenheit = function(kelvinDegrees) {
  return ((kelvinDegrees * (9/5)) - 459.67).toFixed(0);
};

Temperature.prototype.kelvinToCelsius = function(kelvinDegrees) {
  return (kelvinDegrees - 273.15).toFixed(0);
};

exports.temperatureModule = Temperature;
