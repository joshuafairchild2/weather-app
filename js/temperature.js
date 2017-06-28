function Temperature() {

}

Temperature.prototype.kelvinToFahrenheit = kelvinDegrees => ((kelvinDegrees * (9/5)) - 459.67).toFixed(0);

Temperature.prototype.kelvinToCelsius = kelvinDegrees => (kelvinDegrees - 273.15).toFixed(0);

exports.temperatureModule = Temperature;
