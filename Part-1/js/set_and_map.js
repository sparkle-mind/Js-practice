// --------------------------------------> SETS <--------------------------------------

// it is iterable it means "for of" loop work on it.
// store data
//  sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)/ not repeat same data...

const SetNumbers1 = new Set([1, 2, 3]);
console.log(SetNumbers1); //Set(3) {1, 2, 3}

// not repeat same data...it only return UNIQ data ..

const SetNumbers2 = new Set([1, 2, 3, 5, 3, 5, 1]);
console.log(SetNumbers2); // Set(4) {1, 2, 3, 5}

// No index-based access..
const SetNumbers3 = new Set([1, 2, 3]);
console.log(SetNumbers3[2]); //undefined

// create new sets like...
const SetNew = new Set();
SetNew.add(1);
SetNew.add(2);
SetNew.add('hello');

console.log(SetNew); //Set(3) {1, 2, 'hello'}

// add other variable in Set..
let another1 = [5, 8, 41, 2, 8, 1];
SetNew.add(another1);
console.log(SetNew); //Set(4) {1, 2, 'hello', Array(6)}

// Check 8 is present in  data?

let another2 = [5, 8, 41, 2, 8, 1];
const addSet2 = new Set(another2);

if (addSet2.has(8)) {
    console.log(' 8  is present');
} else {
    console.log(' 8  is not present');
}
console.log(addSet2); //8  is present

// for of loop in sets...
const SetNew2 = new Set();
SetNew2.add(1);
SetNew2.add(2);
SetNew2.add('hello');
for (let num of SetNew2) {
    console.log(num);
}
// output is=====>    1 2 hello

// Realistic Example: Get unique items only....

const myUnId = [1, 2, 4, 4, 5, 6, 5, 6];
const uniqueElements = new Set(myUnId);
console.log(uniqueElements); //Set(5) {1, 2, 4, 5, 6}

// --------------------------------------> MAPS <--------------------------------------

// map is an iterable
//  store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like object
// different between maps and objects :-
// objects can only have string or symbol as key
// in maps you can use anything as key like array, number, string

// Create map...
// key value pair

const MapPerson1 = new Map();
MapPerson1.set('firstName', 'Harshit');
MapPerson1.set('age', 23);
MapPerson1.set(55, 'fifty five');

console.log(MapPerson1); // Map(3) {'firstName' => 'Harshit', 'age' => 23, 55 => 'fifty five'}
console.log(MapPerson1.get('firstName')); //harshit

console.log(MapPerson1.keys()); //MapIterator {'firstName', 'age', 55}

for (let key of MapPerson1.keys()) {
    console.log(key, typeof key);
} //  firstName string       age string    55 'number'

// Map Data Structure =======
const MapPerson2 = new Map([["firstName","harshit"],["age", 23]]);
console.log(MapPerson2); //Map(2) {'firstName' => 'harshit', 'age' => 23}





const person4 = {
    id: 1,
    firstName: "harshit"
}
const person5 = {
    id: 5,
    firstName: "yucy"
}
    const userInfo = new Map();
    userInfo.set(person4,{"age":8, "gender":"male"});
    userInfo.set(person5,{"age":21, "gender":"female"});

    console.log(userInfo); //Map(1) {{…} => {…}}
    console.log(userInfo.get(person4));// {age: 8, gender: 'male'}
    console.log(userInfo.get(person5));// {age: 21, gender: 'female'}
    console.log(userInfo.get(person4).age); // 8
