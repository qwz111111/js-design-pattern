# 职责链模式

职责链模式：类似多米诺骨牌, 通过请求第一个条件, 会持续执行后续的条件, 直到返回结果为止。

职责链模式的原理：

作用域链：查找变量时，先从当前上下文的变量对象中查找，如果没有找到，就会从父级执行上下文的变量对象中查找，一直找到全局上下文的变量对象；
原型链：当读取实例的属性时，如果找不到，就会查找当前对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止；
事件冒泡： 事件在 DOM 元素上触发后，会从最内层的元素开始发生，一直向外层元素传播，直到全局 document 对象；
职责链模式的优缺点：

优点：
和命令模式类似，由于处理请求的职责节点可能是职责链上的任一节点，所以请求的发送者和接受者是解耦的；
通过改变链内的节点或调整节点次序，可以动态地修改责任链，符合开闭原则；
缺点：
并不能保证请求一定会被处理，有可能到最后一个节点还不能处理；
调试不便，调用层次会比较深，也有可能会导致循环引用；
职责链模式的适用场景：

需要多个对象处理同一个请求，具体该请求由哪个对象处理在运行时才确定；
在不明确指定接收者的情况下，向多个对象中的其中一个提交请求的话，可以使用职责链模式；
如果想要动态指定处理一个请求的对象集合，可以使用职责链模式；

```
// 领导基类
class Leader {
  constructor() {
    this.nextLeader = null
  }
  setNext(next) {
    this.nextLeader = next
    return next
  }
}

// 小组领导
class GroupLeader extends Leader {
  handle(duration) {}
}

// 部门领导
class DepartmentLeader extends Leader {
  handle(duration) {}
}

// 总经理
class GeneralLeader extends Leader {
  handle(duration) {}
}

const zhangSan = new GroupLeader()
const liSi = new DepartmentLeader()
const wangWu = new GeneralLeader()

// 组装职责链
// 设置小组领导的下一个职责节点为部门领导
// 设置部门领导的下一个职责节点为总经理
zhangSan.setNext(liSi).setNext(wangWu)

```
