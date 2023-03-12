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
