# 迭代器模式

迭代器模式：用于顺序地访问聚合对象内部的元素，又无需知道对象内部结构。使用了迭代器之后，使用者不需要关心对象的内部构造，就可以按序访问其中的每个元素。

```
Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index]
    console.log(callback(element, index, this))
  }
}

const arr = ['a', 'b', 'c']
arr.myForEach((el, index, array) => {
  console.log(el, index, array)
})

```
