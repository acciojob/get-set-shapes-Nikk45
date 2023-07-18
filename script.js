//complete this code
class Rectangle {
	
	constructor(width, height){
		this.wid = width;
		this.hei = height;
	}

	get width(){
		return this.wid;
	}

	get height(){
		return this.hei;
	}

	getArea(){
		return this.wid * this.hei;
	}
}

class Square extends Rectangle {
	constructor(sideLength) {
	    super(sideLength, sideLength);
	 }
	
	getPerimeter(){
		return 4 * this.wid;	
	}
}

// const sq = new Square(7);
// const rec = new Rectangle(5,10);
// const res = sq.getPerimeter();
// const re = rec.getArea();
// console.log("square of "+ sq.rect_h+ " " +res);
// console.log("rectangle "+ rec.rect_w+ " " +re);

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;






