var tessel = require('tessel');
var gpio_bank = tessel.port['GPIO'];
var pinG = tessel.port['D'].pin['G1'];
var pinF = tessel.port['D'].pin['G2'];
var pinA = gpio_bank.pin['G1'];
var pinB = gpio_bank.pin['G2'];
var pinP = gpio_bank.pin['G3'];
var pinC = gpio_bank.pin['G4'];
var pinD = gpio_bank.pin['G5'];
var pinE = gpio_bank.pin['G6'];
var Display = require('./seven-segment-display');

var display = new Display(
	{ pins:{ 
			a: pinA,b: pinB,c: pinC,d: pinD,e: pinE,f: pinF,g: pinG,p: pinP 
		}
	}
);
while(1){
	display.printOne();	
}

