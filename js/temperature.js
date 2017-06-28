function Temperature() {

}

Temperature.prototype.kelvinToFahrenheit = function(kelvinDegrees) {
  return ((kelvinDegrees * (9/5)) - 459.67).toFixed(0);
}

exports.temperatureModule = Temperature;
