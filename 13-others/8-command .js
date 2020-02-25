// 命令模式
// 接受者
class Reciver {
  exec() {
    console.log("执行")
  }
}

// 命令者
class Command {
  constructor(receiver) {
    this.reciver = receiver
  }
  cmd() {
    console.log("执行命令")
    this.reciver.exec()
  }
}

// 触发者
class Invoker {
  constructor(command) {
    this.command = command
  }
  invoker() {
    console.log("开始")
    this.command.cmd()
  }
}

// 士兵
let soldier = new Reciver()
// 小号手
let trumpeter = new Command(soldier)
// 将军
let general = new Invoker(trumpeter)

general.invoker()
