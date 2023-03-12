# 单例模式
单例模式（Singleton Pattern）涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一对象的方式，可以直接访问，不需要实例化该类的对象。

该模式的特点：

单例类只能有一个实例。
单例类必须自己创建自己的唯一实例。
单例类必须给所有其他对象提供这一实例。
```
// 单例模式 传入一个函数
function Singleton(fn) {
  let instance = null
  return function () {
    if (!instance) {
      // 确定this上下文并传递参数
      instance = fn.apply(this, arguments)
    }
    return instance
  }
}
function createAlertMessage(html) {
  let div = document.createElement('div')
  div.innerHTML = html
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}
let createSingleAlertMessage = Singleton(createAlertMessage)

// 弹窗只会被创建一次
let alertMessage = createSingleAlertMessage('hello world')
let alertMessage1 = createSingleAlertMessage('hello world1')

alertMessage.style.display = 'block'
alertMessage1.style.display = 'block'


```