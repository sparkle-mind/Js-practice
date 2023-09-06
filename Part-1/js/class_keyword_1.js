// ====================== class =======================
//class are fake

// ----------------------- Ex- 1 ----------------------------------
class createUser {
    constructor(fname, lname, email, age, adr) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.age = age;
        this.address = adr;
    }
    about() {
        return `${this.firstName} is ${this.age} years old`;
    }
    is18() {
        return this.age >= 18;
    }
}

const user1 = new createUser('sam', 'patel', 'hell123@gmail.com', 25, 'surat Guj.');
console.log(user1); // createUser {firstName: 'sam', lastName: 'patel', email: 'hell123@gmail.com', age: 25, address: 'surat Guj.'}
console.log(user1.is18()); // true

// ----------------------- Ex- 2 ----------------------------------

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return ` ${this.name} is   eating`;
    }

    isSuperCute() {
        return this.age <= 2;
    }
    isCute() {
        return true;
    }
}

const animal1= new Animal("tom" , 1) ;
console.log(animal1); //Animal {name: 'tom', age: 1}
console.log(animal1.isSuperCute()) //true



const animal2= new Animal("jerry" , 5) ;
console.log(animal2); //Animal {name: 'jerry', age: 5}
console.log(animal2.eat()); // jerry is   eating
console.log(animal2.isSuperCute()) //false


// ----------------- extends key    ,  super key ---------------------------------

class Dog extends Animal {
    constructor(name, age,speed) {
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed} kmph`
    }
}

const tommy= new Dog("Tommy" , 3 , 65) ;
console.log(tommy); // Dog {name: 'Tommy', age: 3}
console.log(tommy.eat()); // Tommy is   eating
console.log(tommy.run()) //Tommy is running at 65 kmph