var tessel = require('tessel');
var IC_control = require('7441_IC_control');
var gpio_bank = tessel.port['GPIO'];
var pinA = gpio_bank.pin['G1'];
var pinB = gpio_bank.pin['G2'];
//var pinP = gpio_bank.pin['G3'];
var pinC = gpio_bank.pin['G4'];
var pinD = gpio_bank.pin['G5'];
var seven = new IC_control(
  
     {a:pinA , b:pinB , c:pinC , d:pinD}
  
);
while(1){
seven.printWord('3');}