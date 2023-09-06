// ============********** IMPORTANT ARRAY METHODS:  **********=====================

// these all are "callback function " it means all  function that is passed as an argument to another function and is executed after the completion of a certain task or event.

//  1] forEach()  -----> forEach method does not return array.
//  2] map() ---------> map return always  new array.
//  3] filter()

// 1] ForEach() ================================================================( Before ES6 forEach method most used by developers..)

// first parameter always return number
// second parameter always return index

const numbersArray = [4, 8, 8, 2];

function multiplyBy2(num, index) {
    console.log(`index is  ${index} and ${num * 2} `);
}

// for(let i =0;i<numbersArray.length;i++){
//   multiplyBy2(numbersArray[i],i);
// }

// or
numbersArray.forEach(multiplyBy2);

// or
// numbersArray.forEach(function (num,index){
//   console.log(`index is  ${index} and ${num * 2} `);
// });

const forest = [5, 8, 9, 6];
forest.forEach(function (number) {
    console.log(number * 5);
});

const users = [
    { fname: 'samir', age: 23 },
    { fname: 'umang', age: 26 },
    { fname: 'rinkesh', age: 13 }
];
users.forEach(function (user, ind) {
    console.log(user.fname + ind);
});

// We can use either a for loop or forEach() to iterate through elements in an array ....

// **********  Using for loop *****************

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

for (let i = 0; i < arrayItems.length; i++) {
    copyItems.push(arrayItems[i]);
}

console.log(copyItems);

// **********  Using forEach() *****************

// arrayItems.forEach(function(item){
//   copyItems.push(item);
// })

// console.log(copyItems);

// 2] MAP() ==============================================================================

// map () return new Array/var/obj..

let map1 = [5, 3, 4];
let mapReturn = map1.map(function (num) {
    return num * 2;
    // return num + " hy";
});
// console.log(map1);
console.log(mapReturn); // [10,6,8]

// 3] FILTER() ==========================================================================

// return even number from array using filter()...

let filter1 = [5, 3, 4, 8, 9];
let filter1Return = filter1.filter(function (num) {
    return num % 2 === 0;
});
console.log(filter1Return); //  [4, 8]

let filter2 = ['pizza', 'dosa', 'burger', 'pizza'];
let filter2Return = filter2.filter(function (target) {
    return target === 'pizza';
});
console.log(filter2Return); //  ['pizza', 'pizza']

const list = ['sam', 55, 'rin', 89, 'sam'];
const answer = list.filter(function (i) {
    // For example, let's filter out numbers from the array
    return typeof i !== 'number';
});

console.log(answer);

// ---------------->  same output achieved from using forEach() ,map() ,"for of" and "for" loop  like this... <----------------

// ---------------->  Using forEach()

// let totalAmount=0;
// userCart.forEach(function(i) {

//   return totalAmount= totalAmount + i.price;
// }, 0)
// console.log(totalAmount)

// ----------------> Using MAP()

// let totalAmount=0;
// userCart.map(function(i) {

//   return totalAmount= totalAmount + i.price;
// }, 0)
// console.log(totalAmount)

// ----------------> Using For Of

// let totalAmount=0;
// for(i of userCart){
//  totalAmount= totalAmount + i.price;
// }
// console.log(totalAmount)

// ----------------> Using For loop

let totalAmount = 0;
for (let i = 0; i < userCart.length; i++) {
    totalAmount = totalAmount + userCart[i].price;
}
console.log(totalAmount);
