// 建造者，汽车部件厂家，提供具体零部件的生产
class CarBuilder {
  constructor({ color = 'white', weight = 0 }) {
    this.color = color
    this.weight = weight
  }

  // 生产部件，轮胎
  buildTyre(type) {
    const tyre = {}
    switch (type) {
      case 'small':
        tyre.tyreType = '小号轮胎'
        tyre.tyreIntro = '正在使用小号轮胎'
        break
      case 'normal':
        tyre.tyreType = '中号轮胎'
        tyre.tyreIntro = '正在使用中号轮胎'
        break
      case 'big':
        tyre.tyreType = '大号轮胎'
        tyre.tyreIntro = '正在使用大号轮胎'
        break
    }
    this.tyre = tyre
  }

  // 生产部件，发动机
  buildEngine(type) {
    const engine = {}
    switch (type) {
      case 'small':
        engine.engineType = '小马力发动机'
        engine.engineIntro = '正在使用小马力发动机'
        break
      case 'normal':
        engine.engineType = '中马力发动机'
        engine.engineIntro = '正在使用中马力发动机'
        break
      case 'big':
        engine.engineType = '大马力发动机'
        engine.engineIntro = '正在使用大马力发动机'
        break
    }
    this.engine = engine
  }
}

// 指挥者，负责最终汽车产品的装配
class BenChiDirector {
  constructor(tyre, engine, param) {
    const car = new CarBuilder(param)
    car.buildTyre(tyre)
    car.buildEngine(engine)
    return car
  }
}

// 获得产品实例
const benchi = new BenChiDirector('small', 'big', {
  color: 'red',
  weight: '1600kg'
})

console.log(benchi)

// {
//     color: "red",
//     engine: {engineType: "大马力发动机", engineIntro: "正在使用大马力发动机"},
//     tyre: {tyreType: "小号轮胎", tyreIntro: "正在使用小号轮胎"},
//     weight: "1600kg"
// }
