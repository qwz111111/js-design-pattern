# 抽象工厂模式
工厂模式：根据输入的不同返回不同类的实例，一般用来创建同一类对象。工厂方式的主要思想是将对象的创建与对象的实现分离。

抽象工厂模式：通过对类的工厂抽象使其业务用于对产品类簇的创建，而不是负责创建某一类产品的实例。关键在于使用抽象类制定了实例的结构，调用者直接面向实例的结构编程，从实例的具体实现中解耦。

抽象工厂模式的优缺点：

优点：抽象产品类将产品的结构抽象出来，访问者不需要知道产品的具体实现，只需要面向产品的结构编程即可，从产品的具体实现中解耦；
缺点：
扩展新类簇的产品类比较困难，因为需要创建新的抽象产品类，并且还要修改工厂类，违反开放封闭原则；
带来了系统复杂度，增加了新的类，和新的继承关系；
抽象工厂模式的使用场景：如果一组实例都有相同的结构，那么就可以使用抽象工厂模式。

抽象工厂模式与工厂模式的区别：

工厂模式 主要关注单独的产品实例的创建；
抽象工厂模式 主要关注产品类簇实例的创建，如果产品类簇只有一个产品，那么这时的抽象工厂模式就退化为工厂模式了；
```
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


```