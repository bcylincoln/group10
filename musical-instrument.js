// ACOUSTIC guitar 

//musical-instrument.js Do something new, interesting, and different. 
//We made a guitar that will play a note based on the string that you click.
//A wave is also displayed when you click near a string.

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
	playing1 = true; // move this line once the ranges have been 
	if (mouseX < 300 & mouseY < 50) {
    osc = osc1;
		
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


function draw(){
  stroke(255, 255, 255);
  if (playing1){
    redraw_back();
    
    //if strum string 1, draw a wave there and no where else
    if(mouseY < 90 && mouseY >40){
      line(0, 50, mouseX, 50);
  		line(0, 90, width, 90);
  		line(0, 130, width, 130);
  		line(0, 170, width, 170);
  		line(0, 210, width, 210);
  		line(0, 250, width, 250);
      make_wave(50);
  	//if strum string 2.. and so on
    }else if (mouseY < 100){
      line(0, 50, width, 50);
        line(0, 90, mouseX, 90);
  	line(0, 130, width, 130);
  	line(0, 170, width, 170);
  	line(0, 210, width, 210);
  	line(0, 250, width, 250);
      make_wave(90);
    }else if (mouseY < 140){
      line(0, 50, width, 50);
  		line(0, 90, width, 90);
  		line(0, 130, mouseX, 130);
  		line(0, 170, width, 170);
  		line(0, 210, width, 210);
  		line(0, 250, width, 250);
      make_wave(130);
    }else if (mouseY < 190){
      line(0, 50, width, 50);
  		line(0, 90, width, 90);
  		line(0, 130, width, 130);
  		line(0, 170, mouseX, 170);
  		line(0, 210, width, 210);
  		line(0, 250, width, 250);
      make_wave(170);
    }else if (mouseY < 220){
      line(0, 50, width, 50);
  		line(0, 90, width, 90);
  		line(0, 130, width, 130);
  		line(0, 170, width, 170);
  		line(0, 210, mouseX, 210);
  		line(0, 250, width, 250);
      make_wave(210);
    }else {
      line(0, 50, width, 50);
  		line(0, 90, width, 90);
  		line(0, 130, width, 130);
  		line(0, 170, width, 170);
  		line(0, 210, width, 210);
  		line(0, 250, mouseX, 250);
      make_wave(250);
    }
  }else{
    static_strings();
  }
}

function static_strings(){
  redraw_back()
  line(0, 50, width, 50);
  line(0, 90, width, 90);
  line(0, 130, width, 130);
  line(0, 170, width, 170);
  line(0, 210, width, 210);
  line(0, 250, width, 250);
}


function redraw_back(){
    background(225,171,88);
		fill('black');
		rect(20,0,280,150);
		fill(120);
		ellipse(150,150,250);
}

function make_wave(string_y){
  // how to draw a wave: https://p5js.org/reference/#/p5/sin
  var a = 0.0;
	var inc = TWO_PI / 25.0;
  for (var i = mouseX; i < width; i= i + 3) {
  	line(i , string_y, i , string_y + sin(a) * 40.0);
  	a = a + inc;
  }
  
}
