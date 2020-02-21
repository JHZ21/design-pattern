const EventEmitter = require("events").EventEmitter

// const emitter = new EventEmitter()
// // 监听 some 事件
// emitter.on("some", info => {
//   console.log("fn1", info)
// })
// // 监听 some 事件
// emitter.on("some", info => {
//   console.log("fn2", info)
// })

// // 触发 some 事件
// emitter.emit("some", "qwer")

/* 继承 */
// class Dog extends EventEmitter {
//   constructor(name) {
//     super()
//     this.name = name
//   }
// }

// let simon = new Dog("simon")
// simon.on("bark", function() {
//   console.log(this.name, " barked-1")
// })
// simon.on("bark", function() {
//   console.log(this.name, " barked-2")
// })

// setInterval(() => {
//   simon.emit("bark")
// }, 1500)
