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

  });

  describe('Changing temperature', function() {

    it('increase the temperature by one degrees', function() {
      thermocat.increaseTemperature();
      expect(thermocat.temperature).toEqual(21);
    });

    it('decrease the temperature by one degree', function(){
      thermocat.decreaseTemperature();
      expect(thermocat.temperature).toEqual(19);
    });

  });


});