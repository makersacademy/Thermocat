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

    it('can reset temperature to twenty degrees inline', function() {
      thermocat.increaseTemperature();
      expect(thermocat.resetTemperature()).toEqual(20);
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

  describe('Toggling Power Save mode', function() {

    it('can be turned off Power Save mode', function(){
      thermocat.turnOffPowerSave();
      expect(thermocat.isPowerSaveMode).toBe(false);
    });

    it('can be turned back on Power Save mode', function() {
      thermocat.turnOffPowerSave();
      thermocat.turnOnPowerSave();
      expect(thermocat.isPowerSaveMode).toBe(true);
    });

  });

  describe('Maximum temperatures', function(){

    it('has a max of 25 degrees by default when power save is on', function(){
      expect(thermocat.maximumTemperature).toEqual(25);
    });

    it('has a max of 32 degrees if power save mode is off', function(){
      thermocat.turnOffPowerSave();
      expect(thermocat.maximumTemperature).toEqual(32);
    });

    it('has a max of 25 degrees when power save mode is turned back on', function() {
      thermocat.turnOffPowerSave();
      thermocat.turnOnPowerSave();
      expect(thermocat.maximumTemperature).toEqual(25);
    });

  });

  describe('Changing temperature within maximum and minimum temperature ranges', function(){

    it('cannot be decreased below 10 degrees', function(){
      thermocat.decreaseTemperatureBy(10);
      thermocat.decreaseTemperature();
      thermocat.decreaseTemperature();
      expect(thermocat.temperature).toEqual(10);
    });

    it('cannot increase the temperature past 25 degrees when power save mode is on', function() {
      thermocat.increaseTemperatureBy(5);
      thermocat.increaseTemperature();
      expect(thermocat.temperature).toEqual(25);
    });

    it('cannot increase the temperature past 32 degrees when power save mode is off', function(){
      thermocat.turnOffPowerSave();
      thermocat.increaseTemperatureBy(12);
      thermocat.increaseTemperature();
      expect(thermocat.temperature).toEqual(32);
    });

  });


});












