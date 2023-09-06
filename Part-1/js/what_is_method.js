// WHAT IS METHOD IN JS?
// ---> function inside object is called "Method" ......
//      JavaScript methods are actions that can be performed on objects.

// function inside object
const person = {
    firstName: 'harshit',
    age: 8,
    about: function () {
        console.log('person name is harshit and person age is 8');
    }
};
person.about(); //person name is harshit and person 8

// use "this" keyword -----

const person2 = {
    firstName: 'harshit',
    age: 8,
    about: function () {
        console.log(`person name is ${this.firstName} and person age  ${this.age} `);
    }
};
person2.about(); //person name is harshit and person 8

// "this" is a whole object..
const person3 = {
    firstName: 'harshit',
    age: 8,
    about: function () {
        console.log(this);
    }
};
person3.about(); //{firstName: 'harshit', age: 8, about: ƒ()}

// --------- Define one time function and use in multiple obj... -----------

function PersonInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}


const personA = {
    firstName: 'samir',
    age: 23,
    about: PersonInfo
};
const personB = {
    firstName: 'umang',
    age: 21,
    about: PersonInfo
};
const personC = {
    firstName: 'rinkesh',
    age: 20,
    about: PersonInfo
};

personB.about(); //person name is umang and age is 21
personC.about();//person name is rinkesh and age is 20
console.log(personA); //{firstName: 'samir', age: 23, about: ƒ()}