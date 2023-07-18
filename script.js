//complete this code
class Rectangle {
	const rect_w = 5;
	const rect_h = 10;
	constructor(rect_w, rect_h){
		this.rect_w = rect_w;
		this.rect_h = rect_h;
	}

	get Width(){
		return this.rect_w;
	}

	get Height(){
		return this.rect_h;
	}

	getArea(){
		return this.rect_w*this.rect_h;
	}
}

class Square extends Rectangle {
	const sq_s = 7; 
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
// alert("square "+res);
// alert("rectangle" +re);

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;






