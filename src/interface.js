function ThermocatView(element) {
  this.element = $(element);
  this.thermocat = new Thermocat;
  this.element.text(this.thermocat.temperature);
  this.bindTo('.increase_temperature', this.thermocat, this.thermocat.increaseTemperature, this.element);
  this.bindTo('.decrease_temperature', this.thermocat, this.thermocat.decreaseTemperature, this.element);
  this.bindTo('.reset', this.thermocat, this.thermocat.resetTemperature, this.element);
};

ThermocatView.prototype.bindTo = function(selector, obj, func, element) {
  $(selector).on('click', function() {
    element.text(func.call(obj));
  });
};

$(document).ready(function() {
  new ThermocatView('.temperature h1');
  // $('.temperature h1').text(thermocat.temperature);

  // $('.increase_temperature').on('click', function() {
  //   $('.temperature h1').text(thermocat.increaseTemperature());
  // });

  // $('.decrease_temperature').on('click', function() {
  //   $('.temperature h1').text(thermocat.decreaseTemperature());
  // });

  // $('.reset').on('click', function() {
  //   thermocat.resetTemperature()
  //   $('.temperature h1').text(thermocat.temperature);
  // });
});
