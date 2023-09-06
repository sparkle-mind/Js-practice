const obj1 = {
    key1: 'value1',
    key2: 'value2'
};
const obj2 = {
    key3: 'value3'
};

// we need to access obj1 key value pair from obj2
console.log(obj2.key2); //undefined

// ----- SOLUTION   Object.create() / __proto__ --------
//Proto: It is an actual object that provides a way to inherit/reference properties from JavaScript with the help of an object which is created with new

const obj3 = {
    key1: 'value1',
    key2: 'value2'
};
const obj4 = Object.create(obj3);
console.log(obj4.key2); //value2
// __proto__   or [[prototype]] both are same but  __proto__ and  prototype is different
console.log(obj4.__proto__); //{key1: 'value1', key2: 'value2'}

//  ------------------ Ex-1 --------------------
const UserMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old`;
    },
    is18: function () {
        return this.age >= 18;
    }
};

function createUser(fname, lname, email, age, adr) {
    const user = Object.create(UserMethods);
    user.firstName = fname;
    user.lastName = lname;
    user.email = email;
    user.age = age;
    user.address = adr;

    return user;
}
const user1 = createUser('sam', 'patel', 'hell123@gmail.com', 25, 'surat Guj.');
console.log(user1); //{firstName: 'sam', lastName: 'patel', email: 'hell123@gmail.com', age: 25, address: 'surat Guj.'}
console.log(user1.about()) //sam is 25 years old

const user2 = createUser('um', 'sss', 'helsdadal123@gmail.com', 15, 'ahd Guj.');
console.log(user2.is18()) //false



