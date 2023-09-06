// ========================= PROTOTYPE ========================
// const UserMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function () {
//         return this.age >= 18;
//     }
// };

function createUser(fname, lname, email, age, adr) {
    const user = Object.create(createUser.prototype);
    user.firstName = fname;
    user.lastName = lname;
    user.email = email;
    user.age = age;
    user.address = adr;

    return user;
}

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function () {
    return this.age >= 18;
};



const user1 = createUser('sam', 'patel', 'hell123@gmail.com', 25, 'surat Guj.');
console.log(user1.about()); // sam is 25 years old
