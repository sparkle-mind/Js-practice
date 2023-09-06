// Create Common Methods and use in constructor...

const UserMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    }
};

function createUser(fname, lname, email, age, adr) {
    const user = {};
    user.firstName = fname;
    user.lastName = lname;
    user.email = email;
    user.age = age;
    user.address = adr;
    user.about=UserMethods.about;
    user.is18=UserMethods.is18

    return user;
}

const  user1=createUser("sam", "patel","hell123@gmail.com",25,"surat Guj.");
console.log(user1); //{firstName: 'sam', lastName: 'patel', emai: 'hell123@gmail.com', age: 25, address: 'surat Guj.'}
console.log(user1.about()); //sam is 25 years old
console.log(user1.is18()); //ture


const  user2=createUser("umg", "patel","yahoo123@gmail.com",15,"jnd Guj.");
console.log(user2.is18()); //false