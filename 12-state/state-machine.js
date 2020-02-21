const StateMachine = require("javascript-state-machine")

// 初始化状态机模型
const fsm = new StateMachine({
  init: "收藏",
  transitions: [
    {
      name: "doStore",
      from: "收藏",
      to: "取消收藏"
    },
    {
      name: "deleteStore",
      from: "取消收藏",
      to: "收藏"
    }
  ],
  methods: {
    // 监听执行收藏
    onDoStore() {
      console.log("收藏成功")
      updateText()
    },
    onDeleteStore() {
      console.log("已经取消收藏")
      updateText()
    }
  }
})

setInterval(() => {
  console.log("-------------")

  if (fsm.is("收藏")) {
    fsm.doStore()
  } else {
    fsm.deleteStore()
  }
}, 2000)

function updateText() {
  console.log("func:", fsm.state)
}
