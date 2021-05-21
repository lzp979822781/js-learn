class Person {
    name: string
    private age: number
    protected gender: boolean
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = false
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`);
        console.log(this.age)
    }
}

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age);
        console.log(this.gender)
    }

    static create(name: string, age: number) {
        return new Student(name, age);
    }
}

const person: Person = new Person('aaa', 23);
console.log(person.name);
// 私有变量只能在当前类中访问,继承类中无法访问
// console.log(person.age);

console.log(Student.create('jack', 12));