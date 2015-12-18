var tessel = require('tessel')
    , Keypad = require('tessel-matrix-keypad')
    , gpio = tessel.port['GPIO'].pin //shortcut for referencing Tessel pins
    , modD = tessel.port['D'].pin;

  var keypad = new Keypad({
    keys: [
      ['1', '2', '3', 'A'],
      ['4', '5', '6', 'B'],
      ['7', '8', '9', 'C'],
      ['*', '0', '#', 'D']]
  , rows: [gpio.G1, gpio.G2, gpio.G3, gpio.G4]
  , cols: [gpio.G5, gpio.G6, modD.G1, modD.G2]
    modC
  });
var times = 0;
  keypad.on('change', function(key, val){
    console.log(key+val);
  });

  keypad.on('keydown', function(key){
    //console.log(times);
    //times++;
  });

  keypad.on('keyup', function(key){

  });