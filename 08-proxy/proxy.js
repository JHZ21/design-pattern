class RealImg {
  constructor(fileName) {
    this.fileName = fileName
    this.loadFromDisk()
  }
  dispaly() {
    console.log("display... " + this.fileName)
  }
  loadFromDisk() {
    console.log("loading... " + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.RealImg = new RealImg(fileName)
  }
  dispaly() {
    this.RealImg.dispaly()
  }
}

// test code
let proxyImg = new ProxyImg("a.png")
proxyImg.dispaly()
