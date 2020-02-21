// 状态（红灯， 绿灯， 黄灯）
class State {
  constructor(color) {
    this.color = color
  }
  handle(context) {
    console.log(`turn to ${this.color} light`)
    context.setState(this)
  }
}

// 主体
class Context {
  constructor() {
    this.state = null
  }
  getState() {
    return this.state
  }
  setState(state) {
    this.state = state
  }
}

// test code
const context = new Context()

const green = new State("green")
const red = new State("red")
const yellow = new State("yellow")

// 绿灯亮了
green.handle(context)
console.log("context state: ", context.getState())
// 红灯亮了
red.handle(context)
console.log("context state: ", context.getState())
// 绿灯亮了
yellow.handle(context)
console.log("context state: ", context.getState())
