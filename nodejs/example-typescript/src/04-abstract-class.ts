// typescript将不同文件编译到一起造成冲突，通过export,将当前文件作为一个独立的模块
export {};

abstract class Animal {
    eat(food: string): void {
        console.log(`呼噜呼噜吃：${food}`);
    }

    abstract run(distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log(`四脚爬行：${distance}`)
    }
}

const dog = new Dog();
dog.eat('牛肉丝');
dog.run(1000);