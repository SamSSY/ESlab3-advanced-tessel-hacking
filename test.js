var tessel = require('tessel');
var Display = require('seven-segment-display');
var Keypad = require('tessel-matrix-keypad');
var Caculator = require('Calculator');

var gpio_bank = tessel.port['GPIO'];
//var pinG = tessel.port['D'].pin['G1'];
//var pinF = tessel.port['D'].pin['G2'];
var pin1 = gpio_bank.pin['G1'];
var pin2 = gpio_bank.pin['G2'];
var pin3 = gpio_bank.pin['G3'];
var pin4 = gpio_bank.pin['G4'];
var pin5 = gpio_bank.pin['G5'];
var pin6 = gpio_bank.pin['G6'];
var pin7 = tessel.port['B'].pin.G1;
var pin8 = tessel.port['B'].pin.G2;
var modA = tessel.port['A'].pin;
var modB = tessel.port['B'].pin;
var modC = tessel.port['C'].pin;
var modD = tessel.port['D'].pin;


/*var IC_control = require('7441_IC_control');
var seven = new IC_control(
  
     {pin7:modD.G1 , pin1:modD.G2 , pin2:modD.G3 , pin6:pinD}
  
);
while(1){
seven.printWord('3');}*/
/*while(1){
	display.printD();	
}*/
/*
var keypad = new Keypad({
    keys: [
      ['1', '2', '3', 'A'],
      ['4', '5', '6', 'B'],
      ['7', '8', '9', 'C'],
      ['*', '0', '#', 'D']]
  , rows: [pin1, pin2, pin3, pin4]
  , cols: [pin5, pin6, pin7, pin8]
  });*/
var caculator = new Caculator(
  [
    { pin7:modD.G1, pin1:modD.G2, pin2:modD.G3, pin6:modC.G1},
    { pin7:modA.G1, pin1:modA.G2, pin2:modA.G3, pin6:modC.G2},
    gpio_bank.pin['A1'],
    [pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8],
    modC.G3
  ]
); 

  caculator.calculate();
  //caculator.currentValue = 100;
  //caculator.showValue();

/*
var times = 0;
  keypad.on('change', function(key, val){
    //console.log(key+val);
  });

  keypad.on('keydown', function(key){
    //console.log(key);
    //times++;
    //display.printWord(key);
    caculator.Add(parseInt(key));
  });

  keypad.on('keyup', function(key){

  });*/
