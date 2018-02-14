var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqM = 100;

var oscA, oscS, oscD, oscF, oscM;

var playingA, playingS, playingD, playingF,playingM = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
	
	oscM = new p5.Oscillator();
  oscM.setType('triangle');
  oscM.freq(freqM);
  oscM.amp(0);
  oscM.start();
}


function draw() { 
	fill(120);
	background(0,255,255);
  if (playingA) {
    rect(0, 0, width/4, height);
	} 
	if (playingS) {
    rect(width/4, 0, width/4, height);
	}
	if (playingD) {
		rect(width/2, 0, width/4, height);
	} 
	if (playingF) {
		rect(width/1.33, 0, width/4, height);
	} 
	if (playingM) {
		rect(0, 0, width, height/4);
	} 
  text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function mousePressed() {
 print("got mouse press");
  var osc;
    osc = oscM;
		playingM = true;
  if (osc) {
    osc.amp(0.5, 0.1);	//volume (0-1), time from 0 to volume
  }
}

function mouseReleased() {
  print("got mouse release");
  var osc;
    osc = oscM;
		playingM = false;
	 if (osc) {
    osc.amp(0, 0.5);
	}
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = true;
  } else if (key == 'S') {
    osc = oscS;
		playingS = true;
  } else if (key == 'D') {
    osc = oscD;
		playingD = true;
  } else if (key == 'F') {
    osc = oscF;
		playingF = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);	//volume (0-1), time from 0 to volume
  }
}


function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		playingA = false;
  } else if (key == 'S') {
    osc = oscS;
		playingS = false;
  } else if (key == 'D') {
    osc = oscD;
		playingD = false;
  } else if (key == 'F') {
    osc = oscF;
		playingF = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
  }
}
