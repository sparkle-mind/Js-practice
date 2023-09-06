// constructor function
// To create different objects with the same properties, we would need to use the keyword "new" and the keyword "this".

// Create Functions to Create Multiple Objects-----------------

const userFirst = {
    firstName: 'harshit',
    lastName: 'vashistha',
    email: 'harshitvashisth@gmail.com',
    age: 2,
    address: 'House Number, Colony, pincode, state',
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    }
};
const AboutUser = userFirst.about();
console.log(AboutUser); //harshit is 2 years old

//    ------------- Ex-1 ------------
//function(that function  create objects / constructor)
//add key value pair
//return Objects

// const user1 = {
//     firstName:'harshit',
//     lastName: 'harshit',
//     email: 'harshitvashisth@gmail.com',
//     age: 2,
//     address: 'House Number, Colony, pincode, state',
//     about: function () {
//         return `${this. firstName} is ${this.age} years old`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// };

//  instead of above obj we can create constructor ...

function createUser(fname, lname, email, age, adr) {
    const user = {};
    user.firstName = fname;
        user.lastName = lname;
        user.emai = email;
        user.age = age;
        user.address = adr;
        user.about = function () {
            return `${this.firstName} is ${this.age} years old`;
        },
        user.is18 = function () {
            return this.age >= 18;
        };
    return user;
}

const user1=createUser("harshit","harshit","harshitvashisth@gmail.com",2,"House Number, Colony, pincode, state",);
console.log(user1);// {firstName: 'harshit', lastName: 'harshit', emai: 'harshitvashisth@gmail.com', age: 2, address: 'House Number, Colony, pincode, state', …}
console.log(user1.about()); //harshit is 2 years old
console.log(user1.is18());// false

const user2=createUser("sam","patel","sam13@gmail.com",21,"surat 222484");
console.log(user2); //{firstName: 'sam', lastName: 'patel', emai: 'sam13@gmail.com', age: 21, address: 'surat 222484', …}
console.log(user2.is18());// true