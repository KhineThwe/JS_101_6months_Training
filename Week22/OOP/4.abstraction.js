class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return this.color;
  }

  //abstract method
  draw() {
    throw new Error("Abstract method 'draw' must be implemented");
  }
}
//circle
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  //overide the abstract method
  draw() {
    console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
  }
}

class Square extends Shape {
  constructor(color, sideLength) {
    super(color);
    this.sideLength = sideLength;
  }
  draw() {
    console.log(
      `Drawing a ${this.color} square with side length ${this.sideLength}`
    );
  }
}

const circle = new Circle("red", 5);
circle.draw();

const square = new Square("blue", 4);
square.draw();
/*
Abstraction is about hiding unnecessary details and exposing only what is essential
 */
