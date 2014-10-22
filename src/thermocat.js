function Thermocat() {
	this.temperature = 20;
  this.isPowerSaveMode = true;
  this.color = 'yellow';
  this.type = 'cat';
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
};

Thermocat.prototype.increaseTemperature = function() {
  return this.increaseTemperatureBy(1)
};

Thermocat.prototype.increaseTemperatureBy = function(degrees) {
  if (this.temperature === this.maximumTemperature) {
    return this.maximumTemperature
  };
  return this.temperature = this.temperature + degrees

};

Thermocat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1)
};

Thermocat.prototype.decreaseTemperatureBy = function(degrees) {
  if (this.temperature === this.minimumTemperature) {
  	return this.minimumTemperature };
  return this.temperature = this.temperature - degrees
};

Thermocat.prototype.resetTemperature = function() {
  return this.temperature = 20;
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

Thermocat.prototype.turnOffPowerSave = function() {
	this.isPowerSaveMode = false;
	this.maximumTemperature = 32;
};

Thermocat.prototype.turnOnPowerSave = function() {
  this.isPowerSaveMode = true;
  this.maximumTemperature = 25;
};