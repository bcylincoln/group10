// ACOUSTIC guitar 

//musical-instrument.js Do something new, interesting, and different. 
//In a comment at the top of this sketch articulate what is new, interesting, 
//or different about your work.

var freq1 = 330;
var freq2 = 247;
var freq3 = 196;
var freq4 = 147;
var freq5 = 110;
var freq6 = 82.4;

var osc1, osc2, osc3, osc4, osc5, osc6;

var playing1, playing2, playing3, playing4,playing5,playing6 = false;

function setup() {
  createCanvas(300,300);
	background(225,171,88);
	fill('black');
	rect(20,00,280,150);
	fill(120);
	ellipse(150,150,250);
  
  osc1 = new p5.Oscillator();
  osc1.setType('triangle');
  osc1.freq(freq1);
  osc1.amp(0);
  osc1.start();
  
  osc2 = new p5.Oscillator();
  osc2.setType('triangle');
  osc2.freq(freq2);
  osc2.amp(0);
  osc2.start();
  
  osc3 = new p5.Oscillator();
  osc3.setType('triangle');
  osc3.freq(freq3);
  osc3.amp(0);
  osc3.start();
  
  osc4 = new p5.Oscillator();
  osc4.setType('triangle');
  osc4.freq(freq4);
  osc4.amp(0);
  osc4.start();
	
	osc5 = new p5.Oscillator();
  osc5.setType('triangle');
  osc5.freq(freq5);
  osc5.amp(0);
  osc5.start();
	
	osc6 = new p5.Oscillator();
  osc6.setType('triangle');
  osc6.freq(freq6);
  osc6.amp(0);
  osc6.start();
}
		
function mousePressed() {
	print("got mouse press at "+ mouseX +" "+ mouseY);
	var osc;
	if (mouseX < 300 & mouseY < 50) {
    osc = osc1;
		playing1 = true;
	}
  if (osc) {
    osc.amp(0.5, 0.1);	//volume (0-1), time from 0 to volume
  }
}

function mouseReleased() {
  print("got mouse released at "+ mouseX +" "+ mouseY);
  var osc;
    osc = osc1;
		playing1 = false;
	 if (osc) {
    osc.amp(0, 0.5);
	}
}
