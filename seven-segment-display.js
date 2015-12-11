// interface: var display = new seven_segment_display({pins:{ a: ,b: ,c: ,d: ,e: ,f: ,g: ,p: });

function seven_segment_display(option){
	this.pinA = option.pins.a;
	this.pinB = option.pins.b;
	this.pinC = option.pins.c;
	this.pinD = option.pins.d;
	this.pinE = option.pins.e;
	this.pinF = option.pins.f;
	this.pinG = option.pins.g;
	this.pinP = option.pins.p;
	
	// set all pins to output
	this.setOutput();
}

seven_segment_display.prototype = {
	
	setOutput : function (){
		this.pinA.rawDirection(true);
		this.pinB.rawDirection(true);
		this.pinC.rawDirection(true);
		this.pinD.rawDirection(true);
		this.pinE.rawDirection(true);
		this.pinF.rawDirection(true);
		this.pinG.rawDirection(true);
		this.pinP.rawDirection(true);
	},
	
	// 0:
	// a b c d e f g 
	// L L L L L L H
	printZero: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(0);
		this.pinG.rawWrite(1);
		this.pinF.rawWrite(0);
	},
	// 1:
	// a b c d e f g 
	// H L L H H H H
	printOne: function(){
		this.pinA.rawWrite(1);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(1);
		this.pinE.rawWrite(1);
		this.pinG.rawWrite(1);
		this.pinF.rawWrite(1);
	},
	// 2:
	//G1G2G4G5G6|G2G1
	// a b c d e f g 
	// L L H L L H L
	printTwo: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(1);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(0);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(1);
	},
	// 3:
	// a b c d e f g 
	// L L L L H H L
	printThree: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(1);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(1);
	},
	// 4:
	// a b c d e f g 
	// H L L H H L L
	printFour: function(){
		this.pinA.rawWrite(1);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(1);
		this.pinE.rawWrite(1);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(0);
	},
	// 5:
	// a b c d e f g 
	// L H L L H L L
	printFive: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(1);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(1);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(0);
	},
	// 6:
	// a b c d e f g 
	// L H L L L L L
	printSix: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(1);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(0);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(0);
	},
	// 7:
	// a b c d e f g 
	// L L L H H H H
	printSeven: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(1);
		this.pinE.rawWrite(1);
		this.pinG.rawWrite(1);
		this.pinF.rawWrite(1);
	},
	// 8:
	// a b c d e f g 
	// L L L L L L L
	printEight: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(0);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(0);
	},
	// 9:
	// a b c d e f g 
	// L L L L H L L
	printNine: function(){
		this.pinA.rawWrite(0);
		this.pinB.rawWrite(0);
		this.pinP.rawWrite(1);
		this.pinC.rawWrite(0);
		this.pinD.rawWrite(0);
		this.pinE.rawWrite(1);
		this.pinG.rawWrite(0);
		this.pinF.rawWrite(0);
	},
	printAll: function(){
		// for testing, infinite traversal
		var funqueue = [];
		console.log("!");
		funqueue.push(this.printZero);
		funqueue.push(this.printOne);
		funqueue.push(this.printTwo);
		funqueue.push(this.printThree);
		funqueue.push(this.printFour);
		funqueue.push(this.printFive);
		funqueue.push(this.printSix);
		funqueue.push(this.printSeven);
		funqueue.push(this.printEight);
		funqueue.push(this.printNine);
		
		console.log(funqueue);
		function infiniteTraverse(index){
			(funqueue[index])();
			if(index == funqueue.length - 1) index = -1;
			setTimeout(function(){
				infiniteTraverse(index + 1);
			},1000);
		}
		
		infiniteTraverse(0);
		console.log("!");
	}
}

module.exports = seven_segment_display;

/*
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

pinA.rawDirection(true);
pinB.rawDirection(true);
pinP.rawDirection(true);
pinC.rawDirection(true);
pinD.rawDirection(true);
pinE.rawDirection(true);
pinG.rawDirection(true);
pinF.rawDirection(true);

var output = 1;

*/
/*
 -- TEST PIN MAPPING --
   
    [G] [GPIO]
    G1G2 G1G2 
	g f V a b
	 - - - - - 
	|         |
	|         |
	|         |
	|         |
	 - - - - -
	 e d   c p
    G6G5   G4G3
*/

/*

// 0:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L L L L L L H
function showNumZero(){
	pinA.rawWrite(0);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(0);
	pinE.rawWrite(0);
	pinG.rawWrite(1);
	pinF.rawWrite(0);
}

// 1:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// H L L H H H H
function showNumOne(){
	pinA.rawWrite(1);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(1);
	pinE.rawWrite(1);
	pinG.rawWrite(1);
	pinF.rawWrite(1);
}

// 2:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L L H L L H L
function showNumTwo(){
	pinA.rawWrite(0);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(1);
	pinD.rawWrite(0);
	pinE.rawWrite(0);
	pinG.rawWrite(0);
	pinF.rawWrite(1);
}

// 3:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L L L L H H L
function showNumThree(){
	pinA.rawWrite(0);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(0);
	pinE.rawWrite(1);
	pinG.rawWrite(0);
	pinF.rawWrite(1);
}

// 4:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// H L L H H L L
function showNumFour(){
	pinA.rawWrite(1);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(1);
	pinE.rawWrite(1);
	pinG.rawWrite(0);
	pinF.rawWrite(0);
}

// 5:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L H L L H L L
function showNumFive(){
	pinA.rawWrite(0);
	pinB.rawWrite(1);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(0);
	pinE.rawWrite(1);
	pinG.rawWrite(0);
	pinF.rawWrite(0);
}

// 6:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L H L L L L L
function showNumSix(){
	pinA.rawWrite(0);
	pinB.rawWrite(1);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(0);
	pinE.rawWrite(0);
	pinG.rawWrite(0);
	pinF.rawWrite(0);
}

// 7:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L L L H H H H
function showNumSeven(){
	pinA.rawWrite(0);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(1);
	pinE.rawWrite(1);
	pinG.rawWrite(1);
	pinF.rawWrite(1);
}

// 8:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L L L L L L L
function showNumEight(){
	pinA.rawWrite(0);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(0);
	pinE.rawWrite(0);
	pinG.rawWrite(0);
	pinF.rawWrite(0);
}

// 9:
//G1G2G4G5G6|G2G1
// a b c d e f g 
// L L L L H L L
function showNumNine(){
	pinA.rawWrite(0);
	pinB.rawWrite(0);
	pinP.rawWrite(1);
	pinC.rawWrite(0);
	pinD.rawWrite(0);
	pinE.rawWrite(1);
	pinG.rawWrite(0);
	pinF.rawWrite(0);
}

// for testing, infinite traversal
var funqueue = [];
funqueue.push(showNumZero);
funqueue.push(showNumOne);
funqueue.push(showNumTwo);
funqueue.push(showNumThree);
funqueue.push(showNumFour);
funqueue.push(showNumFive);
funqueue.push(showNumSix);
funqueue.push(showNumSeven);
funqueue.push(showNumEight);
funqueue.push(showNumNine);


var testObj = {
	printAll: infiniteTraverse
}
setImmediate(function(){
	testObj.printAll(0);		
});

function infiniteTraverse(index){
	(funqueue[index])();
	if(index == funqueue.length - 1) index = -1;
	setTimeout(function(){
		infiniteTraverse(index + 1);
	},1000);
}
*/

/*
function testToggle(){
	setInterval(function () {
    	toggleOutput();
    	pin_G1.rawWrite(output);
	}, 1000);	
}

function toggleOutput(){
	if (output) output = 0;
    else output = 1;	
}
*/

//module.exports = seven_segment_display;