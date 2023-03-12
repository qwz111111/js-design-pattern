// 饭店方法
class Restaurant {
  static orderDish(type) {
    switch (type) {
      case '鱼香肉丝':
        return new YuXiangRouSi()
      case '宫保鸡丁':
        return new GongBaoJiDin()
      default:
        throw new Error('本店没有这个')
    }
  }
}

// 菜品抽象类
class Dish {
  constructor() {
    if (new.target === Dish) {
      throw new Error('抽象类不能直接实例化!')
    }
    this.kind = '菜'
  }

  // 抽象方法
  eat() {
    throw new Error('抽象方法不能调用!')
  }
}

// 鱼香肉丝类
class YuXiangRouSi extends Dish {
  constructor() {
    super()
    this.type = '鱼香肉丝'
  }
  eat() {
    console.log(this.kind + ' - ' + this.type + ' 真香')
  }
}

// 宫保鸡丁类
class GongBaoJiDin extends Dish {
  constructor() {
    super()
    this.type = '宫保鸡丁'
  }
  eat() {
    console.log(this.kind + ' - ' + this.type + ' 让我想起了外婆做的菜')
  }
}

const dish0 = new Dish()
// Error 抽象类不能直接实例化

const dish1 = Restaurant.orderDish('鱼香肉丝')
dish1.eat()
// 菜 - 鱼香肉丝 真香

const dish2 = Restaurant.orderDish('红烧排骨')
// Error 本店没有这个
