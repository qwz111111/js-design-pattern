# 工厂模式
工厂模式：根据不同的输入返回不同类的实例，一般用来创建同一类对象。

工厂方式的主要思想是将对象的创建与对象的实现分离。

工厂模式的使用场景：

对象的创建比较复杂，而访问者无需知道创建的具体流程；
处理大量具有相同属性的小对象；
工厂模式的优缺点：

优点：工厂模式将 对象的创建和实现分离。
良好的封装，代码结构清晰，访问者无需知道对象的创建流程，特别是创建比较复杂的情况下；
扩展性优良，通过工厂方法隔离了用户和创建流程隔离，符合开放封闭原则；
解耦了高层逻辑和底层产品类，符合最少知识原则，不需要的就不要去交流；
缺点：带来了额外的系统复杂度，增加了抽象性；
工厂模式与模板方法模式的主要区别是：

工厂模式主要关注产品实例的创建，对创建流程封闭起来；
模板方法模式 主要专注的是为固定的算法骨架提供某些步骤的实现；
```
// 饭店方法
class Restaurant {
  static getMenu(menu) {
    switch (menu) {
      case '鱼香肉丝':
        return new YuXiangRouSi()
      case '宫保鸡丁':
        return new GongBaoJiDin()
      default:
        throw new Error('这个菜本店没有')
    }
  }
}

// 鱼香肉丝类
class YuXiangRouSi {
  constructor() {
    this.type = '鱼香肉丝'
  }
  eat() {
    console.log(this.type + ' 真香')
  }
}

// 宫保鸡丁类
class GongBaoJiDin {
  constructor() {
    this.type = '宫保鸡丁'
  }
  eat() {
    console.log(this.type + ' 让我想起了外婆做的菜')
  }
}

const dish1 = Restaurant.getMenu('鱼香肉丝')
dish1.eat()
// 鱼香肉丝 真香
const dish2 = Restaurant.getMenu('红烧排骨')
// Error 这个菜本店没有

```