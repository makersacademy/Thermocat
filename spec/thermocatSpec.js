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



  });




});