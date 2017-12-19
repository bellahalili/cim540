var frameArray = [];
var currentFrame = 0;

var pMillis = 0;
var interval = 500;


function preload() {
	// 	frameArray[0] = loadImage("assets/Thatwasclose0.jpg");
	//	frameArray[1] = loadImage("assets/Thatwasclose1.jpg");
	//	frameArray[2] = loadImage("assets/Thatwasclose2.jpg");
	//	frameArray[3] = loadImage("assets/Thatwasclose3.jpg");


	for (var i = 0; i < 4; i++) {
		var loadImageString = "assets/Thatwascloase" + i + ".jpg";
		frameArray[i] = loadImage(loadImageString);

	}

}

function setup() {
	createCanvas(500, 500);

}

function draw() {
	//frameRate(1);

	//console.log(millis());

	image(frameArray[currentFrame], 0, 0);

	//currentImage = currentIamge +1;

	console.log(currentImage);

	if (millis() - prevMillis >= interval) {
		prevMillis = millis();
		currentImage++;
		// Next frame
		pMillis = millis();
		appear = true;
	}

	if (currentImage == frameArray.length) {
		currentImage = 0;
		// Return to first frame
	}

	if (appear == true) {
		ellipse(mouseX, mouseY, 10, 10);
	}


}
