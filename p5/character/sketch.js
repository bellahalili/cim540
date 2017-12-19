var centerX = 0;
var centerY = 0;

var bgColor = "blue";
var fSize = 200;

var bgImage, bgImage2, bgImage3, bgImage4;

var posX = 0;
var posY = 0;

var num = 200;

function preload(){
	bgImage = loadImage("assets/fall.jpg");
	bgImage2 = loadImage("assets/winter.jpg");
	bgImage3 = loadImage("assets/spring.jpg");
	bgImage4 = loadImage("assets/summer.jpg");
}

function setup() {
	//console.log(num);

    createCanvas(1000, 500);

  	background('rgb(0,0,100)');

    posX = width / 2;
    posY = 225;

}

function draw() {

	console.log("mouseX: " + mouseX + "mouseY: " + mouseY);

	centerX = mouseX;
	centerY = mouseY;

    //strokeWeight(0);
    //Face
    fill("grey");
    ellipse(posX, posY, fSize, fSize);

	ellipse(posX, posY + 200);

    //mouth
    fill("red");
	arc(500, 250, 100, 100, 0, PI)

    //eyes
	var eyeWiggle = map(mouseX,0,width,-10,10);
	console.log("eyeWiggle: ", eyeWiggle);
	var eyeWiggleY = map(mouseY,0, height, 0,10);
    fill("white");
    ellipse(posX - 40 + eyeWiggle, posY - 20 + eyeWiggleY, 30, 40);
    ellipse(posX + 40 + eyeWiggle, posY - 20 + eyeWiggleY, 30, 40);

    //pupils
    fill(0,0, 300);
    ellipse(posX - 40 + eyeWiggle, posY - 10 + eyeWiggleY, 20, 20);
    ellipse(posX + 40 + eyeWiggle, posY - 10 + eyeWiggleY, 20, 20);

}
