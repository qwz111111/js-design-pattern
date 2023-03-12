# 享元模式

享元模式：运用共享技术来有效地支持大量细粒度对象的复用，以减少创建的对象的数量。通俗来讲，享元就是共享单元，比如现在流行的共享单车、共享充电宝等，他们的核心理念都是享元模式。

享元模式适用于以下场景：

程序中使用大量的相似对象，造成很大的内存开销
对象的大多数状态都可以变为外部状态，剥离外部状态之后，可以用相对较少的共享对象取代大量对象。
享元模式的优缺点：

优点：
由于减少了系统中的对象数量，提高了程序运行效率和性能，精简了内存占用，加快运行速度；
外部状态相对独立，不会影响到内部状态，所以享元对象能够在不同的环境被共享；
缺点：
引入了共享对象，使对象结构变得复杂；
共享对象的创建、销毁等需要维护，带来额外的复杂度（如果需要把共享对象维护起来的话）；

```
const books = new Array(10000).fill(0).map((v, index) => {
  return Math.random() > 0.5
    ? {
        name: `计算机科学${index}`,
        category: '技术类'
      }
    : {
        name: `傲慢与偏见${index}`,
        category: '文学类类'
      }
})

class FlyweightBook {
  constructor(category) {
    this.category = category
  }
  // 用于享元对象获取外部状态
  getExternalState(state) {
    for (const p in state) {
      this[p] = state[p]
    }
  }
  print() {
    console.log(this.name, this.category)
  }
}
// 然后定义一个工厂，来为我们生产享元对象
// 注意，这段代码实际上用了单例模式,每个享元对象都为单例， 因为我们没必要创建多个相同的享元对象
const flyweightBookFactory = (function () {
  const flyweightBookStore = {}
  return function (category) {
    if (flyweightBookStore[category]) {
      return flyweightBookStore[category]
    }
    const flyweightBook = new FlyweightBook(category)
    flyweightBookStore[category] = flyweightBook
    return flyweightBook
  }
})()
// DOM的享元对象
class Div {
  constructor() {
    this.dom = document.createElement('div')
  }
  getExternalState(extState, onClick) {
    // 获取外部状态
    this.dom.innerText = extState.innerText
    // 设置DOM位置
    this.dom.style.top = `${extState.seq * 22}px`
    this.dom.style.position = `absolute`
    this.dom.onclick = onClick
  }
  mount(container) {
    container.appendChild(this.dom)
  }
}

const divFactory = (function () {
  const divPool = [] // 对象池
  return function (innerContainer) {
    let div
    if (divPool.length <= 20) {
      div = new Div()
      divPool.push(div)
    } else {
      // 滚动行为，在超过20个时，复用池中的第一个实例，返回给调用者
      div = divPool.shift()
      divPool.push(div)
    }
    div.mount(innerContainer)
    return div
  }
})()

// 外层container，用户可视区域
const container = document.createElement('div')
// 内层container, 包含了所有DOM的总高度
const innerContainer = document.createElement('div')
container.style.maxHeight = '400px'
container.style.width = '200px'
container.style.border = '1px solid'
container.style.overflow = 'auto'
innerContainer.style.height = `${22 * books.length}px` // 由每个DOM的总高度算出内层container的高度
innerContainer.style.position = `relative`
container.appendChild(innerContainer)
document.body.appendChild(container)

function load(start, end) {
  // 装载需要显示的数据
  books.slice(start, end).forEach((bookData, index) => {
    // 先生产出享元对象
    const flyweightBook = flyweightBookFactory(bookData.category)
    const div = divFactory(innerContainer)
    // DOM的高度需要由它的序号计算出来
    div.getExternalState(
      { innerText: bookData.name, seq: start + index },
      () => {
        flyweightBook.getExternalState({ name: bookData.name })
        flyweightBook.print()
      }
    )
  })
}

load(0, 20)
let cur = 0 // 记录当前加载的首个数据
container.addEventListener('scroll', e => {
  const start = (container.scrollTop / 22) | 0
  if (start !== cur) {
    load(start, start + 20)
    cur = start
  }
})

```
