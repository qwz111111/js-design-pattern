# 中介者模式（调停模式）

中介者模式：用一个中介对象来封装多个对象之间的复杂交互。中介者将对象与对象之间紧密的耦合关系变得松散，从而可以独立地改变他们。

中介者模式用于解除对象与对象之间的紧耦合关系。

中介者模式的使用场景：如果对象之间的复杂耦合确实导致调用和维护出现了困难，而且这些耦合度随项目的变化呈指数增长曲线，那我们就可以考虑用中介者模式来重构代码。

中介者模式的优缺点：

优点：
松散耦合，降低了同事对象之间的相互依赖和耦合，不会像之前那样牵一发动全身；
将同事对象间的一对多关联转变为一对一的关联，符合最少知识原则，提高系统的灵活性，使得系统易于维护和扩展；
中介者在同事对象间起到了控制和协调的作用，因此可以结合代理模式那样，进行同事对象间的访问控制、功能扩展；
因为同事对象间不需要相互引用，因此也可以简化同事对象的设计和实现；
缺点：
逻辑过度集中化，当同事对象太多时，中介者的职责将很重，逻辑变得复杂而庞大，以至于难以维护；
当出现中介者可维护性变差的情况时，考虑是否在系统设计上不合理，从而简化系统设计，优化并重构，避免中介者出现职责过重的情况；

```
class Person {
  // 个人信息
  constructor(name, info, target) {
    this.name = name
    // 对象类型，每一项为数字，比如身高、工资..
    this.info = info
    // 对象类型，每一项为两个数字的数组，表示可接受的最低和最高值
    this.target = target
    // 考虑列表
    this.enemyList = []
  }

  // 注册相亲对象及家长
  registEnemy(...enemy) {
    this.enemyList.push(...enemy)
  }

  // 检查所有相亲对象及其家长的条件
  checkAllPurpose() {
    this.enemyList.forEach(enemy => enemy.info && this.checkPurpose(enemy))
  }

  // 检查对方是否满足自己的要求，并发信息
  checkPurpose(enemy) {
    // 对可枚举属性进行遍历操作，确认是否全部符合条件
    const result = Object.keys(this.target).every(key => {
      const [low, high] = this.target[key]
      return low <= enemy.info[key] && enemy.info[key] <= high
    })
    // 通知对方
    enemy.receiveResult(result, this, enemy)
  }

  // 接受到对方的信息
  receiveResult(result, they, me) {
    result
      ? console.log(
          `${they.name}：我觉得合适~ \t（我的要求 ${me.name} 已经满足）`
        )
      : console.log(
          `${they.name}：你是个好人! \t（我的要求 ${me.name} 不能满足！）`
        )
  }
}

// 男方
const ZhangXiaoShuai = new Person(
  '张小帅',
  { age: 25, height: 171, salary: 5000 },
  { age: [23, 27] }
)

/// 男方家长
const ZhangXiaoShuaiParent = new Person('张小帅家长', null, {
  height: [160, 167]
})

// 女方
const LiXiaoMei = new Person(
  '李小美',
  { age: 23, height: 160 },
  { age: [25, 27] }
)

// 女方家长
const LiXiaoMeiParent = new Person('李小美家长', null, {
  salary: [10000, 20000]
})

// 注册，每一个 person 实例都需要注册对方家庭成员的信息
ZhangXiaoShuai.registEnemy(LiXiaoMei, LiXiaoMeiParent)
ZhangXiaoShuaiParent.registEnemy(LiXiaoMei, LiXiaoMeiParent)

LiXiaoMei.registEnemy(ZhangXiaoShuai, ZhangXiaoShuaiParent)
LiXiaoMeiParent.registEnemy(ZhangXiaoShuai, ZhangXiaoShuaiParent)

// 检查对方是否符合要求，同样，每一个 person 实例都需要执行检查
ZhangXiaoShuai.checkAllPurpose()
// 张小帅：我觉得合适~ 	（我的要求 李小美 已经满足）
LiXiaoMei.checkAllPurpose()
// 李小美：我觉得合适~ 	（我的要求 张小帅 已经满足）
ZhangXiaoShuaiParent.checkAllPurpose()
// 张小帅家长：我觉得合适~ 	（我的要求 李小美 已经满足）
LiXiaoMeiParent.checkAllPurpose()
// 李小美家长：你是个好人! 	（我的要求 张小帅 不能满足！）

```
