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
