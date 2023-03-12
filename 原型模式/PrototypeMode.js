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
