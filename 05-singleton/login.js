class LoginForm {
  constructor() {
    this.state = "hide"
  }
  show() {
    if (this.state === "show") {
      console.log("已经显示")
      return
    }
    this.state = "show"
    console.log("登陆框显示成功")
  }
  hide() {
    if (this.state === "hide") {
      console.log("已经隐藏")
      return
    }
    this.state = "hide"
    console.log("登陆框隐藏成功")
  }
}

LoginForm.getInstance = (function() {
  let instance = null
  return () => {
    if (!instance) {
      instance = new LoginForm()
    }
    return instance
  }
})()

// 测试
console.log(LoginForm.getInstance)

let login1 = LoginForm.getInstance()
let login2 = LoginForm.getInstance()
login1.show()
login2.show()
