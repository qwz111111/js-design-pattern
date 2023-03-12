Array.prototype.myForEach = function (callback) {
  for (let index = 0; index < this.length; index++) {
    const element = this[index]
    callback(element, index, this)
  }
}
Array.prototype.myMap = function (callback) {
  const result = []
  for (let index = 0; index < this.length; index++) {
    const element = this[index]
    result.push(callback(element, index, this))
  }
  return result
}

const arr = ['a', 'b', 'c']
arr.myForEach((el, index, array) => {
  console.log(el, index, array)
})
const baseMap = arr.myMap((el, index, array) => {
  if (el != 'a') {
    return el
  }
})
const baseMap1 = arr.map((el, index, array) => {
  if (el != 'a') {
    return el
  }
})
console.log(baseMap)
console.log(baseMap1)
