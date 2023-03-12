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
