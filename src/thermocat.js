function Thermocat() {
	this.temperature = 20;
  this.isPowerSaveMode = true;
  this.color = 'yellow';
  this.type = 'cat';
};

Thermocat.prototype.increaseTemperature = function() {
  return this.increaseTemperatureBy(1)
};

Thermocat.prototype.increaseTemperatureBy = function(degrees) {
  this.temperature = this.temperature + degrees
};

Thermocat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1)
};

Thermocat.prototype.decreaseTemperatureBy = function(degrees) {
  this.temperature = this.temperature - degrees
};

Thermocat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermocat.prototype.changeColor = function () {
	this.color = 'green'
};