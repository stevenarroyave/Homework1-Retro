//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(400, 400);
}

//Rendering function

function draw() {
background(204);


fill(0,0,0);
rect(150,392,20,50);    //shoes
rect(190,392,20,50);

noStroke();
fill(255,255,255);
rect(165,384,6,8);     //socks
rect(205,384,6,8);

fill(102,51,0);
rect(165,300,6,86);   //left leg
rect(205,300,6,86);   //right leg
rect(165,300,40,17);    //middle pants part


fill(51,25,0);
rect(171,300,34,6);   //dark belt

fill(204,204,0);
rect(179,300,18,6);   //gold belt

fill(224,224,224);
rect(171,216,34,84);  //light gray shirt

fill(0,255,255);
rect(179,216,18,84);    //blue shirt

fill(255,255,255);
rect(171,316,34,24);    //white coat between legs
rect(165,216,6,84);     //white line next to left light gray shirt
rect(205,216,6,84);     //white line next to right light gray shirt
rect(159,228,6,84);     //white left arm
rect(211,228,6,84);     //white right arm

fill(255,229,204);
rect(211,312,6,6);      //right hand
rect(159,312,6,6);      //left hand
rect(179,210,18,6)      //neck
rect(165,204,40,6)      //part of the face
rect(165,156,46,48)     //face

fill(0,0,0);
rect(165,174, 6,6);     //left eye pixel
rect(186,174,6,6);      //right eye pixel

fill(204,255,255);
rect(147,162,54,6);       //hair
rect(153,168,12,6);
rect(159,168,6,18);
rect(159,150,66,6);
rect(159,150,6,12);
rect(165,126,6,30);     //top left corner hair
rect(171,132,6,18);
rect(177,138,6,18);
rect(183,144,6,12);
rect(195,144,6,12);
rect(201,138,6,18);
rect(207,132,6,18);
rect(213,126,6,30);   // top right corner hair
rect(211,156,26,6);    //right side hair spikes
rect(211,162,20,6);
rect(211,168,6,6);
rect(211,174,12,6);
rect(211,180,18,6);
rect(211,186,12,6);
rect(211,192,6,6);


}
