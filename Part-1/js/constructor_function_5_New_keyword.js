// ======================================== New Keyword ========================================
// New keyword in JavaScript is used to create an instance of an object that has a constructor function.
// On calling the constructor function with 'new' operator, the following actions are taken: A new empty object is

function CreateUser1(firstName, age) {
    this.firstName = firstName;
    this.age = age;
}
CreateUser1.prototype.about = function () {
    console.log(this.firstName, this.age);
};

// new keyword ------>
// 1.) empty object this = ()
// 2.) return this
// Object.create(createUser.prototype);

const user1 = new CreateUser1('harshit', 6);

console.log(user1); //CreateUser {firstName: 'harshit', age: 6}




// ---------------- EX-1 -------------------------
// constructor function :
function createUser2(fname, lname, email, age, adr) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.age = age;
    this.address = adr;
}

createUser2.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

createUser2.prototype.is18 = function () {
    return this.age >= 18;
};

const user2 = new createUser2('sam', 'patel', 'hell123@gmail.com', 25, 'surat Guj.');
console.log(user2); //createUser2 {firstName: 'sam', lastName: 'patel', email: 'hell123@gmail.com', age: 25, address: 'surat Guj.'}
console.log(user2.about()); //sam is 25 years old

for(let key in  user2){
    console.log(key)  //  firstName   lastname    email .....
}


// you can not declair without new keyword like...
// const user2 =  createUser2('sam', 'patel', 'hell123@gmail.com', 25, 'surat Guj.') //undefined 