class Circle {
  draw() {
    console.log("画个圆形")
  }
}

class Decorator {
  constructor(circle) {
    this.circle = new Circle()
  }
  draw() {
    this.circle.draw()
    this.setRedBorder(this.circle)
  }
  setRedBorder(circle) {
    console.log("画个红色边框")
  }
}

// test code
let circle = new Circle()
circle.draw()

console.log("----dividing line---")

let dec = new Decorator()
dec.draw()
