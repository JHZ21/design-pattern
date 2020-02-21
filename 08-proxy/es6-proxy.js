// 明星
const star = {
  name: "允儿",
  age: 24,
  phone: "star_11023039928"
}

// 经纪人
const agent = new Proxy(star, {
  get: function(target, key) {
    if (key === "phone") {
      // 返回经纪人电话
      return "agent_1149300282002"
    }
    if (key === "price") {
      // 明星不报价， 经纪人报价
      return 12 * 10000
    }
    return target[key]
  },
  set: function(target, key, val) {
    if (key === "customPrice") {
      if (val < 10 * 10000) {
        throw new Error("价格太低了")
      } else {
        target[key] = val
        return true
      }
    }
  }
})

// test code
console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)

agent.customPrice = 11 * 10000
console.log("agent.customPrice: ", agent.customPrice)
