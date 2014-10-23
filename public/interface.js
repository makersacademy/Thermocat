function ThermocatView(element, currentTemperature) {
  this.element = $(element);
  this.thermocat = new Thermocat;
  this.thermocat.temperature = 0;
  //this.element.text(this.thermocat.temperature);
  this.element.text(this.thermocat.increaseTemperatureBy(currentTemperature));
  this.bindTo('.increase_temperature', this.thermocat, this.thermocat.increaseTemperature);
  this.bindTo('.decrease_temperature', this.thermocat, this.thermocat.decreaseTemperature);
  this.bindTo('.reset', this.thermocat, this.thermocat.resetTemperature);
};

ThermocatView.prototype.bindTo = function(selector, obj, func) {
  $(selector).on('click', function() {
    $('.temperature h1').text(func.call(obj));
  });
};
