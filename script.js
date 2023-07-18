//complete this code
class Rectangle {
	constructor(rect_w, rect_h){
		this.rect_w = rect_w;
		this.rect_h = rect_h;
	}

	getWidth(){
		return this.rect_w;
	}

	getHeight(){
		return this.rect_h;
	}

	getArea(){
		return this.rect_w*this.rect_h;
	}
}

class Square extends Rectangle {

	getPerimeter(){
		return 4*this.rect_w;
	}
}

const sq = new Square(7);
const rec = new Rectangle(5,10);
const res = sq.getPerimeter();
const re = rec.getArea();
alert("square "+res);
alert("rectangle" +re);

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;






