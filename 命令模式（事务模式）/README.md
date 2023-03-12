# 命令模式（事务模式）

命令模式的原理：将请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。

命令模式用于：将请求封装成对象，将命令的发送者和接受者解耦。即：将调用对象（用户界面、API 和代理等）与实现操作的对象隔离开。

命令模式的使用场景：对行为进行"记录、撤销/重做、事务"等处理，需要行为请求者与行为实现者解耦的时候（凡是两个对象间互动方式需要有更高的模块化程度时都可以用到这种模式）

命令模式的优缺点：

优点：
降低对象之间的耦合度。
新的命令可以很容易地加入到系统中。
可以比较容易地设计一个组合命令。
调用同一方法实现不同的功能。
缺点：
使用命令模式可能会导致某些系统有过多的具体命令类。

```
// 命令 —— 执行命令（execute ）时 ，便会执行各自命令接收者的action方法
var CreateCommand = function (receiver) {
  this.receiver = receiver
}

CreateCommand.prototype.execute = function () {
  this.receiver.action()
}

// 接收者——电视——打开电视
var TVOn = function () {}

TVOn.prototype.action = function () {
  alert('TVOn')
}

// 接收者——电视——关闭电视
var TVOff = function () {}

TVOff.prototype.action = function () {
  alert('TVOff')
}

// 调用者——遥控器
var Invoker = function (tvOnCommand, tvOffCommand) {
  this.tvOnCommand = tvOnCommand
  this.tvOffCommand = tvOffCommand
}

Invoker.prototype.tvOn = function () {
  this.tvOnCommand.execute()
}

Invoker.prototype.tvOff = function () {
  this.tvOffCommand.execute()
}

// 执行命令
var tvOnCommand = new CreateCommand(new TVOn())
var tvOffCommand = new CreateCommand(new TVOff())
var invoker = new Invoker(tvOnCommand, tvOffCommand)
invoker.tvOn()
invoker.tvOff()

```
