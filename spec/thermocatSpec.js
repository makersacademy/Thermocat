'use strict';

describe('Thermocat', function(){

	var thermocat;

  beforeEach(function(){
    thermocat = new Thermocat;
  });

  describe('Default settings', function(){

    it('start at 20 degrees', function(){
      expect(thermocat.temperature).toEqual(20);
    });

    it('power save mode should be on', function() {
    	expect(thermocat.isPowerSaveMode).toBe(true);
    });

    it('color should be yellow', function(){
      expect(thermocat.color).toBe('yellow')
    });

    it('should be a cat', function() {
      expect(thermocat.type).toBe('cat')
    });

    it('should have a minimum temperature', function() {
      expect(thermocat.minimumTemperature).toEqual(10);
    });

  });

  describe('Changing temperature', function() {

    it('increase the temperature by one degrees', function() {
      thermocat.increaseTemperature();
      expect(thermocat.temperature).toEqual(21);
    });

    it('increase the temperature by five degrees', function(){
      thermocat.increaseTemperatureBy(5);
      expect(thermocat.temperature).toEqual(25);
    });

    it('decrease the temperature by one degree', function(){
      thermocat.decreaseTemperature();
      expect(thermocat.temperature).toEqual(19);
    });

    it('decrease the temperature by five degrees', function(){
      thermocat.decreaseTemperatureBy(5);
      expect(thermocat.temperature).toEqual(15);
    });

    it('can reset temperature to twenty degrees', function() {
      thermocat.increaseTemperature();
      thermocat.resetTemperature();
      expect(thermocat.temperature).toEqual(20);
    });

  });

  describe('Changing color', function(){

    it('should change to green when temperature is below 18', function(){
      thermocat.decreaseTemperatureBy(3);
      thermocat.changeColor();
      expect(thermocat.color).toEqual('green');
    });

    it('should change to yellow when temperature changes from 17 to 18', function() {
      thermocat.decreaseTemperatureBy(3)
      thermocat.changeColor();
      thermocat.increaseTemperature();
      thermocat.changeColor();
      expect(thermocat.color).toEqual('yellow');
    });

    it('should change to red when temperature is above 25', function(){
      thermocat.increaseTemperatureBy(5);
      thermocat.changeColor();
      expect(thermocat.color).toEqual('red');
    });

    it('should change to yellow when temperature changes from 25 to 24', function() {
      thermocat.increaseTemperatureBy(5);
      thermocat.changeColor();
      thermocat.decreaseTemperature();
      thermocat.changeColor();
      expect(thermocat.color).toEqual('yellow');
    });

  });

  describe('Power saving', function() {

    it('can be turned off Power Save mode', function(){
      thermocat.turnOffPowerSave();
      expect(thermocat.isPowerSaveMode).toBe(false);
    });

  });


});












