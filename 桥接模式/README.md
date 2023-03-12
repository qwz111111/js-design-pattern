# 桥接模式
桥接模式：将抽象部分与它的实现部分分离，使它们都可以独立地变化。使用组合关系代替继承关系，降低抽象和实现两个可变维度的耦合度。

桥接模式的优缺点：

优点：
分离了抽象和实现部分，将实现层（DOM 元素事件触发并执行具体修改逻辑）和抽象层（ 元素外观、尺寸部分的修改函数）解耦，有利于分层；
提高了可扩展性，多个维度的部件自由组合，避免了类继承带来的强耦合关系，也减少了部件类的数量；
使用者不用关心细节的实现，可以方便快捷地进行使用；
缺点：
桥接模式要求两个部件没有耦合关系，否则无法独立地变化，因此要求正确的对系统变化的维度进行识别，使用范围存在局限性；
桥接模式的引入增加了系统复杂度；
桥接模式的适用场景：

如果产品的部件有独立的变化维度，可以考虑桥接模式；
不希望使用继承，或因为多层次继承导致系统类的个数急剧增加的系统；
产品部件的粒度越细，部件复用的必要性越大，可以考虑桥接模式；
```
function Boy(instrument) {
  this.sayHi = function () {
    console.log('hi, 我是男生')
  }

  // 有一个功能叫playInstrument， 没有具体乐器
  this.playInstrument = function () {
    instrument.play()
  }
}

function Girl(instrument) {
  this.sayHi = function () {
    console.log('hi, 我是女生')
  }

  // 有一个功能叫playInstrument， 没有具体乐器
  this.playInstrument = function () {
    instrument.play()
  }
}

function Piano() {
  this.play = function () {
    console.log('钢琴开始演奏')
  }
}

function Guitar() {
  this.play = function () {
    console.log('吉他开始演奏')
  }
}

let piano = new Piano()
let guitar = new Guitar()
let pianoBoy = new Boy(piano)
pianoBoy.playInstrument()
let guitarGirl = new Girl(guitar)
guitarGirl.playInstrument()

```