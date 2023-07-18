//complete this code
class Rectangle {
	constructor(width, height){
		this.width = width;
		this.height = height;
	}

	getWidth(){
		return this.width;
	}

	getHeight(){
		return this.height;
	}

	getArea(){
		return this.width*this.height;
	}
}

class Square extends Rectangle {

	constructor(width){
		super(width);
	}
	
	getPerimeter(){
		return 4*this.width;
	}
}

const sq = new Square(4);
const res = sq.getPerimeter();
alert(res);
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;














