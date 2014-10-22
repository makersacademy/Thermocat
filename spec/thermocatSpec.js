'use strict';

describe('Thermocat', function(){

	var thermocat;

  describe('Default settings', function(){

    it('start at 20 degrees', function(){
      thermocat = new Thermocat;
      expect(thermocat.temperature).toEqual(20);
    });

    it('power save mode should be on', function() {
    	thermocat = new Thermocat;
    	expect(thermocat.isPowerSaveMode).toBe(true);
    });



  });




});