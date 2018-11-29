class Person {
    constructor(name){
        this.name = name;
    }

    sayHi(){
        console.log("hi my name is " + this.name);
    }
}

let person = new Person('Jack');
person.sayHi();