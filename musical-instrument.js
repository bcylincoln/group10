// ACOUSTIC guitar 

//musical-instrument.js Do something new, interesting, and different. 
//We made a guitar that will play a note based on the string that you click.
//A wave is also displayed when you click near a string.


// E A D G B E 
var freqs = [82.4, 110, 147, 196, 247, 330];
var notes = ['E', 'A', 'D', 'G', 'B', 'E'];  

var oscillators = [];

var playing = [];

function setup() {
	createCanvas(300, 300);
	if (key == '1') {
		background(0);
		fill('#FFE4C4');
		ellipse(50, 50, 50);
		ellipse(250, 50, 50);
		ellipse(50, 250, 50);
		ellipse(250, 250, 50);
		rect(25, 50, 50, 200);
		rect(225, 50, 50, 200);
		for (i = 50; i < 251; i = i + 50) {
			fill('#B8860B');
			ellipse(50, i, 20);
			ellipse(250, i, 20);
		}
	} else if (key == '2') {
		background(225, 171, 88);
		fill('black');
		arc(322, 150, 600, 600, PI, 0);
		fill(120);
		ellipse(150, 150, 250);
	}

	for (var i = 0; i < freqs.length; i++) {
		var osc = new p5.Oscillator();
		osc.setType('triangle');
		osc.freq(freqs[i]);
		osc.amp(0);
		osc.start();
		oscillators[i] = osc;
		playing[i] = false;
	}
}

function mousePressed() {
	print("got mouse press at " + mouseX + " " + mouseY);
	var osc;
	if (mouseY < 40 || mouseY > 270) {
		//do nothing
	} else if (mouseX < 300 & mouseY < 50) {
		osc = oscillators[0];
		playing[0] = true;
	} else if (mouseX < 300 & mouseY > 50 & mouseY < 100) {
		osc = oscillators[1];
		playing[1] = true;
	} else if (mouseX < 300 & mouseY > 100 & mouseY < 150) {
		osc = oscillators[2];
		playing[2] = true;
	} else if (mouseX < 300 & mouseY > 150 & mouseY < 200) {
		osc = oscillators[3];
		playing[3] = true;
	} else if (mouseX < 300 & mouseY > 200 & mouseY < 250) {
		osc = oscillators[4];
		playing[4] = true;
	} else if (mouseX < 300 & mouseY > 250) {
		osc = oscillators[5];
		playing[5] = true;
	}
	if (osc) {
		osc.amp(1, 0.1); //volume (0-1), time from 0 to volume
	}
}

function mouseReleased() {
	print("got mouse released at " + mouseX + " " + mouseY);
	var osc;
	if (mouseY < 40 || mouseY > 270) {
		//do nothing
	} else if (mouseX < 300 & mouseY < 50) {
		osc = oscillators[0];
			print(" " + notes[0]);
		playing[0] = false;
	} else if (mouseX < 300 & mouseY > 50 & mouseY < 100) {
		osc = oscillators[1];
			print(" " + notes[1]);
		playing[1] = false;
	} else if (mouseX < 300 & mouseY > 100 & mouseY < 150) {
		osc = oscillators[2];
			print(" " + notes[2]);
		playing[2] = false;
	} else if (mouseX < 300 & mouseY > 150 & mouseY < 200) {
		osc = oscillators[3];
			print(" " + notes[3]);
		playing[3] = false;
	} else if (mouseX < 300 & mouseY > 200 & mouseY < 250) {
		osc = oscillators[4];
			print(" " + notes[4]);
		playing[4] = false;
	} else if (mouseX < 300 & mouseY > 250) {
		osc = oscillators[5];
			print(" " + notes[5]);
		playing[5] = false;
	}
	if (osc) {
		osc.amp(0, 1);
	}
}

// IDEALLY FRET HERE
function keyPressed() {
	var osc;
	if (key == '6') {
		for (i = 0; i < 7; i = i + 1) {
			osc = oscillators[i];
		}
	}
}

function draw() {
	stroke(255);
	if (playing[5]||playing[0]||playing[1]||playing[2]||playing[3]||playing[4]) {
		redraw_back();

		//if strum string 1, draw a wave there and no where else
		if (mouseY < 40 || mouseY > 270) {
			//do nothing
		} else if (mouseY < 90 && mouseY > 40) {
			line(0, 50, mouseX, 50);
			line(0, 90, width, 90);
			line(0, 130, width, 130);
			line(0, 170, width, 170);
			line(0, 210, width, 210);
			line(0, 250, width, 250);
			make_wave(50);
			//if strum string 2.. and so on
		} else if (mouseY < 100) {
			line(0, 50, width, 50);
			line(0, 90, mouseX, 90);
			line(0, 130, width, 130);
			line(0, 170, width, 170);
			line(0, 210, width, 210);
			line(0, 250, width, 250);
			make_wave(90);
		} else if (mouseY < 140) {
			line(0, 50, width, 50);
			line(0, 90, width, 90);
			line(0, 130, mouseX, 130);
			line(0, 170, width, 170);
			line(0, 210, width, 210);
			line(0, 250, width, 250);
			make_wave(130);
		} else if (mouseY < 190) {
			line(0, 50, width, 50);
			line(0, 90, width, 90);
			line(0, 130, width, 130);
			line(0, 170, mouseX, 170);
			line(0, 210, width, 210);
			line(0, 250, width, 250);
			make_wave(170);
		} else if (mouseY < 220) {
			line(0, 50, width, 50);
			line(0, 90, width, 90);
			line(0, 130, width, 130);
			line(0, 170, width, 170);
			line(0, 210, mouseX, 210);
			line(0, 250, width, 250);
			make_wave(210);
		} else {
			line(0, 50, width, 50);
			line(0, 90, width, 90);
			line(0, 130, width, 130);
			line(0, 170, width, 170);
			line(0, 210, width, 210);
			line(0, 250, mouseX, 250);
			make_wave(250);
		}
	} else {
		static_strings();
	}
}

function static_strings() {
	redraw_back()
	line(0, 50, width, 50);
	line(0, 90, width, 90);
	line(0, 130, width, 130);
	line(0, 170, width, 170);
	line(0, 210, width, 210);
	line(0, 250, width, 250);
}


function redraw_back() {
	if (key == '1') {
		background(0);
		fill('#FFE4C4');
		ellipse(50, 50, 50);
		ellipse(250, 50, 50);
		ellipse(50, 250, 50);
		ellipse(250, 250, 50);
		rect(25, 50, 50, 200);
		rect(225, 50, 50, 200);
		for (i = 50; i < 251; i = i + 50) {
			fill('#B8860B');
			ellipse(50, i, 20);
			ellipse(250, i, 20);
		}
	} else if (key == '2') {
		background(225, 171, 88);
		fill('black');
		arc(322, 150, 600, 600, PI, 0);
		fill(120);
		ellipse(150, 150, 250);
	}
}

function make_wave(string_y) {
	// how to draw a wave: https://p5js.org/reference/#/p5/sin
	var a = 0.0;
	var inc = TWO_PI / 25.0;
	for (var i = mouseX; i < width; i = i + 3) {
		line(i, string_y, i, string_y + sin(a) * 40.0);
		a = a + inc;
	}
}
