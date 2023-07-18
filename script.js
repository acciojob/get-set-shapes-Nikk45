//complete this code
class Rectangle {
	
	constructor(rect_w, rect_h){
		this.rect_w = rect_w;
		this.rect_h = rect_h;
	}

	get width(){
		return this.rect_w;
	}

	get height(){
		return this.rect_h;
	}

	getArea(){
		return this.rect_w*this.rect_h;
	}
}

class Square extends Rectangle {
	constructor(sideLength) {
	    super(sideLength, sideLength);
	 }
	
	getPerimeter(){
		return 4*this.sq_s;	
	}
}

const sq = new Square(7);
const rec = new Rectangle(5,10);
const res = sq.getPerimeter();
const re = rec.getArea();
console.log("square "+res);
console.log("rectangle" +re);

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;






