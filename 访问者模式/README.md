# 访问者模式

访问者模式，针对于对象结构中的元素，定义在不改变该对象的前提下访问其结构中元素的新方法。

访问者模式由 3 部分构成：对象集合、集合元素、访问者。

访问者模式的应用场景：

对象结构相对稳定，但其操作算法经常变化的程序。
对象结构中的对象需要提供多种不同且不相关的操作，而且要避免让这些操作变化影响对象的结构。
访问者模式的优缺点：

优点：
扩展性好：在不修改对象结构中的元素的情况下，为对象结构中的元素添加新的功能
复用性好：通过访问者来定义整个对象结构通用的功能，从而提高复用程度
分离无关行为：通过访问者分离无关行为，把相关行为封装在一起，构成一个访问者，这样每一个访问者的功能都比较单一
缺点：
被访问的类的结构是固定的，如果被访问的类的结构会发生变化，则不适合访问者模式
对象结构变化很困难：在访问者模式中，每增加一个新的元素类，都要在每一个具体的访问类中增加响应的具体操作，这违背了开闭原则
违反了依赖倒置原则：访问者模式依赖了具体类，而没有抽象类

```
// 电脑部件——CPU
let CPU = function () {
  this.price = 10
}

CPU.prototype.getPrice = function () {
  return this.price
}

CPU.prototype.accept = function (v) {
  v.visitCpu(this)
}

// 电脑部件——存储器
let Memery = function () {
  this.price = 15
}

Memery.prototype.getPrice = function () {
  return this.price
}

Memery.prototype.accept = function (v) {
  v.visitMemery(this)
}

// 电脑部件——主板
let Board = function () {
  this.price = 20
}
Board.prototype.getPrice = function () {
  return this.price
}

Board.prototype.accept = function (v) {
  v.visitBoard(this)
}

// 电脑——将CPU、存储器、主板组装成电脑
let Computer = function () {
  this.cpu = new CPU()
  this.memery = new Memery()
  this.board = new Board()
}

Computer.prototype.accept = function (v) {
  this.cpu.accept(v)
  this.memery.accept(v)
  this.board.accept(v)
}

// 访问者（客户）——学生
let studentVisitor = function () {
  this.totalPrice = 0
}

studentVisitor.prototype.visitCpu = function (cpu) {
  this.totalPrice += cpu.getPrice() * 0.9 // 学生买电脑的 CPU 给打 9 折
}

studentVisitor.prototype.visitMemery = function (memery) {
  this.totalPrice += memery.getPrice() * 0.95 // 学生买电脑的存储器给打 95 折
}

studentVisitor.prototype.visitBoard = function (board) {
  this.totalPrice += board.getPrice() * 0.8 // 学生买电脑的主板给打 8 折
}

```
