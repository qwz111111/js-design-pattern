# 观察者模式（发布订阅模式）

观察者模式又叫发布订阅模式，它定义了一种一对多的关系，让多个观察者对象同时监听某一个主题对象，这个主题对象的状态发生变化时就会通知所有的观察者对象，使得它们能够自动更新自己。

观察者模式的优缺点：

优点：解耦。
时间上的解耦：注册的订阅行为由消息的发布方来决定何时调用，订阅者不用持续关注，当消息发生时发布者会负责通知；
对象上的解耦 ：发布者不用提前知道消息的接受者是谁，发布者只需要遍历处理所有订阅该消息类型的订阅者发送消息即可（迭代器模式），由此解耦了发布者和订阅者之间的联系，互不持有，都依赖于抽象，不再依赖于具体；
缺点：
增加消耗：创建结构和缓存订阅者这两个过程需要消耗计算和内存资源，即使订阅后始终没有触发，订阅者也会始终存在于内存；
增加复杂度 ：订阅者被缓存在一起，如果多个订阅者和发布者层层嵌套，那么程序将变得难以追踪和调试，参考一下 Vue 调试的时候你点开原型链时看到的 deps/subs/watchers
缺点主要在于理解成本、运行效率、资源消耗，特别是在多级发布 - 订阅时，情况会变得更复杂。
观察者模式的使用场景：当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。

```
class Event {
  constructor() {}
  // 首先定义一个事件容器，用来装事件数组（因为订阅者可以是多个）
  handlers = {}

  // 事件添加方法，参数有事件名和事件方法
  addEventListener(type, handler) {
    // 首先判断handlers内有没有type事件容器，没有则创建一个新数组容器
    if (!(type in this.handlers)) {
      this.handlers[type] = []
    }
    // 将事件存入
    this.handlers[type].push(handler)
  }

  // 触发事件两个参数（事件名，参数）
  dispatchEvent(type, ...params) {
    // 若没有注册该事件则抛出错误
    if (!(type in this.handlers)) {
      return new Error('未注册该事件')
    }
    // 便利触发
    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }

  // 事件移除参数（事件名，删除的事件，若无第二个参数则删除该事件的订阅和发布）
  removeEventListener(type, handler) {
    // 无效事件抛出
    if (!(type in this.handlers)) {
      return new Error('无效事件')
    }
    if (!handler) {
      // 直接移除事件
      delete this.handlers[type]
    } else {
      const idx = this.handlers[type].findIndex(ele => ele === handler)
      // 抛出异常事件
      if (idx === undefined) {
        return new Error('无该绑定事件')
      }
      // 移除事件
      this.handlers[type].splice(idx, 1)
      if (this.handlers[type].length === 0) {
        delete this.handlers[type]
      }
    }
  }
}

var baseEvent = new Event() // 创建event实例
// 定义一个自定义事件:"load"
function load(params) {
  console.log('load', params)
}
baseEvent.addEventListener('load', load)
// 再定义一个load事件
function load2(params) {
  console.log('load2', params)
}
baseEvent.addEventListener('load', load2)
// 触发该事件
baseEvent.dispatchEvent('load', 'load事件触发')
// 移除load2事件
baseEvent.removeEventListener('load', load2)
// 移除所有load事件
baseEvent.removeEventListener('load')


```
