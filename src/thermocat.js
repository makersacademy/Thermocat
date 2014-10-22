function Thermocat() {
	this.temperature = 20;
  this.isPowerSaveMode = true;
  this.color = 'yellow';
  this.type = 'cat';
};

Thermocat.prototype.increaseTemperature = function() {
  this.temperature = this.temperature + 1
};