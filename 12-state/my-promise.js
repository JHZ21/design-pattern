const StateMachine = require("javascript-state-machine")

/// 状态机模型
const fsm = new StateMachine({
  init: "pending",
  transitions: [
    {
      name: "resolve",
      from: "pending",
      to: "fullfilled"
    },
    {
      name: "reject",
      from: "pending",
      to: "rejected"
    }
  ],
  methods: {
    // 监听 resolve
    onResolve(state, data) {
      // state - 当前状态机实例; data : fsm.resolve(xxx)的参数
      setTimeout(() => {
        data.successList.forEach(fn => fn())
      })
    },
    // 监听 reject
    onReject(state, data) {
      // state ： 当前状态机实例; data c： fsm.reject(xxx)的参数
      setTimeout(() => {
        data.failList.forEach(fn => fn())
      })
    }
  }
})

// 定义 Promise
class MyPromise {
  constructor(fn) {
    this.successList = []
    this.failList = []
    fn(
      () => {
        // resolve 函数
        fsm.resolve(this)
      },
      () => {
        // reject 函数
        fsm.reject(this)
      }
    )
  }
  then(successFn, failFn) {
    this.successList.push(successFn)
    this.failList.push(failFn)
  }
}

// test code
function loadImg(src) {
  const promsie = new MyPromise(function(resolve, reject) {
    // let img = document.createElement("img")
    // img.onload = function() {
    // console.log("ss")
    // resolve()

    reject()
    // }
    //   img.onerror = function() {
    //     console.log("img onerror")
    //     reject()
    //   }
    //   img.src = src
  })
  return promsie
}

let src = "https://www.baidu.com/img/bd_logo1.png"
let result = loadImg(src)

result.then(
  () => {
    console.log("ok1")
  },
  () => {
    console.log("fail1")
  }
)
result.then(
  () => {
    console.log("ok2")
  },
  () => {
    console.log("fail2")
  }
)

console.log(this)
