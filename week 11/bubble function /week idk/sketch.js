

function setup(){
	createCanvas(400,400);
	
	interfaceItems.push(new interface(100,100,50,color(255,0,0)))
}

function draw(){
	
	fill(0);
	ellipse(mouseX, mouseY, 10,10);
	
	interfaceItems[0].display();
	interfaceItems[1].display();
	//console.log(interfacItems[0].check());
	
	if(interfaceItems[0].check() == true){
		interfaceItems[0].overlay() = true;
	}else{
		interfaceItems[0].overlay() = false;
	}
	
}

function mousePressed(){
	
	if(interfaceItems[0].check() == true){
		brushSize++;
	}
	
	if(interfaceItems[1].check() == true){
		brushSize--;
	}
}


function interface(tempX, tempY, tempBoxSize, tempImage){
	this.x = tempX;
	this.y = tempY;
	this.boxSize =tempBoxSize;
	this.img = tempImage;
	this.overlay = false;
	
	this.display = function {
		image(this.img, this.x, this.y, this.boxSize,)
		
	if(this.overlay == true){
		fill(255,127);
		rect(this.x, this.y, this.boxSize, this.boxSize);
	}else{
		fill(this.setFill);
		rect(this.x, this.y, this.boxSize, this.boxSize);
		}
	}
				
}
	this.check = function(){
		if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY < this.y && (this.y + this.boxSize) ){
			return true;
		}else{
			this.overlay = false;
			
			return false;
			
		}
	}
}