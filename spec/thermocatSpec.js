'use strict';

describe('Thermocat', function(){

  describe('Default settings', function(){

    it('start at 20 degrees', function(){
      thermocat = new Thermocat;
      expect(thermocat.temperature).toEqual(20);
    });



  });




});