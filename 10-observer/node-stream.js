// stream 用到自定义事件
const fs = require("fs")
const readStream = fs.createReadStream("../assets/data.txt")
const readline = require("readline")

// let length = 0
// let n = 0
// readStream.on("data", function(chunk) {
//   let len = chunk.toString().length
//   console.log("len: ", ++n, len)
//   length += len
// })
// readStream.on("end", () => {
//   console.log("length", length)
// })

let rl = readline.createInterface({
  input: readStream
})

let lineNum = 0
rl.on("line", line => {
  lineNum++
})
rl.on("close", () => {
  console.log("lineNum", lineNum)
})
