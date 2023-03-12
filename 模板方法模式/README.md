# 模板方法模式

模板方法模式：父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时，重新定义算法中的某些实现步骤。模板方法模式的关键是算法步骤的骨架和具体实现分离。

模板方法模式的优缺点：

优点：
封装了不变部分，扩展可变部分，把算法中不变的部分封装到父类中直接实现，而可变的部分由子类继承后再具体实现；
提取了公共代码部分，易于维护，因为公共的方法被提取到了父类，那么如果我们需要修改算法中不变的步骤时，不需要到每一个子类中去修改，只要改一下对应父类即可；
行为被父类的模板方法固定，子类实例只负责执行模板方法，具备可扩展性，符合开闭原则；
缺点：增加了系统复杂度，主要是增加了的抽象类和类间联系，需要做好文档工作；
模板方法模式的使用场景：

如果知道一个算法所需的关键步骤，而且很明确这些步骤的执行顺序，但是具体的实现是未知的、灵活的，那么这时候就可以使用模板方法模式来将算法步骤的框架抽象出来；
重要而复杂的算法，可以把核心算法逻辑设计为模板方法，周边相关细节功能由各个子类实现；
模板方法模式可以被用来将子类组件将自己的方法挂钩到高层组件中，也就是钩子，子类组件中的方法交出控制权，高层组件在模板方法中决定何时回调子类组件中的方法，类似的用法场景还有发布-订阅模式、回调函数；
模板方法模式与工厂模式的区别：

抽象工厂模式 提取的是实例的功能结构；
模板方法模式 提取的是算法的骨架结构；
模板方法模式与策略模式的区别：

模板方法模式 是在子类定义的时候就已经确定了使用的算法；
策略模式 让我们在程序运行的时候动态地指定要使用的算法；

```
var Beverage = function(){};
Beverage.prototype.boilWater = function(){
    console.log( '把水煮沸' );
};
Beverage.prototype.brew = function(){
    throw new Error( '子类必须重写brew方法' );
};
Beverage.prototype.pourInCup = function(){
    throw new Error( '子类必须重写pourInCup方法' );
};
Beverage.prototype.addCondiments = function(){
    throw new Error( '子类必须重写addCondiments方法' );
};
Beverage.prototype.customerWantsCondiments = function(){
    return true; // 默认需要调料
};
Beverage.prototype.init = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    if ( this.customerWantsCondiments() ){ // 如果挂钩返回true，则需要调料
        this.addCondiments();
    }
};
var CoffeeWithHook = function(){};
CoffeeWithHook.prototype = new Beverage();
CoffeeWithHook.prototype.brew = function(){
    console.log( '用沸水冲泡咖啡' );
};
CoffeeWithHook.prototype.pourInCup = function(){
    console.log( '把咖啡倒进杯子' );
};
CoffeeWithHook.prototype.addCondiments = function(){
    console.log( '加糖和牛奶' );
};
CoffeeWithHook.prototype.customerWantsCondiments = function(){
    return window.confirm( '请问需要调料吗？' );
};
var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();


```
