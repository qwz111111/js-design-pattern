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
