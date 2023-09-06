// CALL =============================== (borrow from another function...)

// It can be used to invoke (call) a method with an owner object as an argument (parameter). With call() , an object can use a method belonging to another object.

function mainFun() {
    console.log(' main fun');
}
mainFun.call(); // main fun

// we can access function which is not present in  current obj but we can use function using call()....
// It can be used to invoke (call) a method with an owner object as an argument (parameter). With call() , an object can use a method belonging to another object.

// --------------- Ex-1 -----------
const user1 = {
    firstName: 'harshit',
    age: 8,
    about: function () {
        console.log(this.firstName, this.age);
    }
};
const user2 = {
    firstName: 'mohit',
    age: 9
};
user1.about.call(); // undefined undefined
user1.about.call(user2); //mohit 9

// --------------- Ex-2 -----------
const user3 = {
    firstName: 'umg',
    age: 8,
    about: function (hobby, favSinger) {
        console.log(this.firstName, this.age, hobby, favSinger);
    }
};
const user4 = {
    firstName: 'samir',
    age: 9
};
user3.about.call(user4, 'singing', 'jagjitSingh'); //samir 9 singing jagjitSingh



// --------------- apply Ex-3  store like array -----------
function about(hobby, favPlayer) {
    console.log(this.firstName, this.age, hobby, favPlayer);
}
const user5 = {
    firstName: 'sam',
    age: 23
};
const user6 = {
    firstName: 'abc',
    age: 9
};

about.apply(user5, ["cricket","Rohit Sharma"]);  //sam 23 cricket Rohit Sharma

