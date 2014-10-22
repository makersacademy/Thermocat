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
  if (this.temperature <= 18) {
    this.color = 'green'
  };
  if (this.temperature >= 18 && this.temperature <= 25) {
    this.color = 'yellow'
  };
  if (this.temperature >= 25) {
  	this.color = 'red'
  };
  
};