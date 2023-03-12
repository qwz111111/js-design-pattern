// 把原来的老逻辑代码放在一个类里
class HorribleCode {
  control() {
    console.log('我是一堆老逻辑')
  }
}

// 老代码对应的装饰器
class Decorator {
  // 将老代码实例传入
  constructor(olHC) {
    this.oldHC = olHC
  }
  control() {
    this.oldHC.control()
    // “包装”了一层新逻辑
    this.newHC()
  }
  newHC() {
    console.log('我是新的逻辑')
  }
}

const horribleCode = new HorribleCode()

//这里我们把老代码实例传给了 Decorator，以便于后续 Decorator 可以进行逻辑的拓展。
const decorator = new Decorator(horribleCode)

decorator.control()
