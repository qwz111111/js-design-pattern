// 备忘录模式伪代码
var Page = function () {
  // 通过cache对象缓存数据
  var cache = {}
  return function (page, fn) {
    if (cache[page]) {
      showPage(page, cache[page])
    } else {
      $.post('/url', function (data) {
        showPage(page, data)
        cache[page] = data
      })
    }
    fn && fn()
  }
}
