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
