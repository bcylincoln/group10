
var width = 300;
var height = 300;
var box_A_x = 0;
var box_A_y = 0;
var box_S_x = width/2;
var box_S_y = 0;
var box_D_x = 0;	
var box_D_y = height/2;
var box_F_x = width/2;
var box_F_y = height/2;
var last_fill;

var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var oscA, oscS, oscD, oscF;

var playing = false;


// https://www.w3schools.com/colors/colors_picker.asp

function rect_play(){
  textSize(60);
  if(key == 'A'){
    last_fill = [255, 0, 102]
    fill(102, 255, 204);
 		rect(box_A_x, box_A_y, width/2, height/2);
    fill(1000);
    text('A', width /4 , height/4);
  }
  if(key == 'S'){
    fill(51, 204, 204);
    rect(box_S_x, box_S_y, width/2, height/2);
    fill(1000);
    text('S', 3*width /4 , height/4);
  }
  if(key == 'D'){
    fill(153, 255, 153);
    rect(box_D_x, box_D_y,width/2, height/2);
    fill(1000);
    text('D', width /4 , 3*height/4);
	}
  if(key == 'F'){
    fill(128, 255, 255);
    rect(box_F_x, box_F_y,width/2, height/2);
    fill(1000);
    text('F', 3*width /4 , 3*height/4);
	}
}

function rect_not_played(){
  //rect A
    fill(204, 255, 238)
 		rect(box_A_x, box_A_y,width/2, height/2);
  //rect S
    fill(214, 245, 245);
    rect(box_S_x,box_S_y,width/2, height/2);
  //rect D
    fill(204, 255, 204);
    rect(box_D_x,box_D_y,width/2, height/2);
	//rect F
    fill(204, 255, 255);
    rect(box_F_x,box_F_y,width/2, height/2);
}


function setup() {
  createCanvas(301, 301);
  //backgroundColor = color(255, 0, 255);
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
  
}

function draw() {
  if (playing) {
    rect_play();
  } else {
    rect_not_played();
  }
  //text('click here,\nthen press A/S/D/F\n keys to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
