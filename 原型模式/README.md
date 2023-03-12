# 原型模式
原型模式（Prototype Pattern）是用于创建重复的对象，同时又能保证性能。
```
function Person() {
  Person.prototype.name = 'marry'
  Person.prototype.sayName = function () {
    console.log(this.name)
  }
}
// 或者
// Person.prototype.name = 'marry'
// Person.prototype.sayName = function () {
//   console.log(this.name)
// }
const person1 = new Person()
const person2 = new Person()
person1.sayName() // marry
person2.sayName() // marry
console.log(person1.sayName === person2.sayName) // true
```

用同一个原型new出来的实例，拥有相同的原型上的属性和方法。 

【拓展】用构造函数创建函数时不可以使用箭头函数。