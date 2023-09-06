// ============********** IMPORTANT ARRAY METHODS -2:  **********=====================

// these all are "callback function " it means all  function that is passed as an argument to another function and is executed after the completion of a certain task or event.

//  4] reduce() ----> use for sum of all numbers.
//  5] sort()  -----> sorts the elements of an array.
//  6] find()

//4] REDUCE() ====================================================================

const numbers = [1, 2, 3, 4, 5, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(sum);
// accumulator  ,      currentValue ,    Return
// 1                     2                3 (1+2)
// 3(previous return)    3                   6
// 6                     4                   10
// 10                    5                   15
// 15                    10                  25

const userCart = [
    { productId: 1, productName: 'mobile', price: 12000 },
    { productId: 2, productName: 'laptop', price: 22000 },
    { productId: 3, productName: 'tv', price: 15000 }
];

// const totalAmount = userCart.reduce(function(totalPrice, currentProduct) {
//   return totalPrice + currentProduct.price;
// }, 0); // Added initial value of 0

// console.log(totalAmount); //49000

//5] SORT() ========================================================================

// strings sort like dictionary
// it changed original array..

// string sort....
const ary1 = ['apple', 'drag', 'xolo', 'zara'];
let output1 = ary1.sort();
console.log(output1);

// ---- CAPITAL letter first sorted...
const ary2 = ['apple', 'Drag', 'xolo', 'Zara'];
let output2 = ary2.sort();
console.log(output2);

// number sort....
const ary3 = [5, 8, 55, 6, 333];
let output3 = ary3.sort();
console.log(output3); // output  [333, 5, 55, 6, 8]

// number are not sort like string..
// solution of number sorting..

const ary4 = [5, 8, 55, 6, 333];
ary4.sort(function (a, b) {
    return a - b;
});
console.log(ary4); // output [5, 6, 8, 55, 333]

// Real Use of Sort():==================

// print low to high.....
const products = [
    { productId: 1, productName: 'p1', price: 300 },
    { productId: 2, productName: 'p2', price: 3000 },
    { productId: 3, productName: 'p3', price: 200 },
    { productId: 4, productName: 'p4', price: 8000 },
    { productId: 5, productName: 'p5', price: 500 }
];
products.sort(function (a, b) {
    return a.price - b.price;
});
console.log(products);

// print high to low ....

const products2 = [
    { productId: 1, productName: 'p1', price: 300 },
    { productId: 2, productName: 'p2', price: 3000 },
    { productId: 3, productName: 'p3', price: 200 },
    { productId: 4, productName: 'p4', price: 8000 },
    { productId: 5, productName: 'p5', price: 500 }
];
products2.sort(function (a, b) {
    return b.price - a.price;
});
console.log(products2);

//6] FIND() ========================================================================

const myFind = ['Hello', 'cat', 'dog', 'lion'];

const ansFind = myFind.find(function (string) {
    return string.length === 3;
});
console.log(ansFind); // cat

// when function satisfies his condition then  after he will stop the execution. for ex. dog is also 3 letter word but it is not print.

const usersFind = [
    { userId: 1, userName: 'harshit' },
    { userId: 2, userName: 'harsh' },
    { userId: 3, userName: 'nitish' },
    { userId: 4, userName: 'mohit' },
    { userId: 5, userName: 'aaditya' }
];
// const myUser = usersFind.find((user) => {
//     return user.userId === 3; // Access userId from the user object
// });

const myUser = usersFind.find((user) => user.userId === 3);

console.log(myUser); //{userId: 3, userName: "nitish"}

//7] EVERY() ========================================================================

//  ---> every() method return TRUE/FALSE(Boolean value only)

// if all array elements satisfy the condition then it return TRUE
// if any elements does not satisfy  the condition then it return FALSE

// EX. Check all elements is Even numbers or not?
const EveryNumbers = [2, 4, 6, 8, 10];
const EveryAns = EveryNumbers.every((number) => number % 2 === 0);
console.log(EveryAns); // true

const EveryNumbers2 = [2, 4, 9, 8, 10, 3];
const EveryAns2 = EveryNumbers2.every((number) => number % 2 === 0);
console.log(EveryAns2); // false

// EX.2 Check all products price is less than 30000?

const EveryUserCart = [
    { productId: 1, productName: 'mobile', price: 12000 },
    { productId: 2, productName: 'laptop', price: 22000 },
    { productId: 3, productName: 'tv', price: 15000 }
];
const EveryUserCartAns = EveryUserCart.every((cartItem) => cartItem.price < 30000);
console.log(EveryUserCartAns); //true


//8] SOME() ========================================================================
// ---> some() method return TRUE/FALSE(Boolean value only)
// if any  array elements satisfy the condition then it return TRUE.

// kya ek bhi number esa hai jo even hai
const SomeNumbers = [3,5,10,9];
const SomeAns = SomeNumbers. some((number)=>number%2===0);
console.log(SomeAns); // true


// EX. Check any product price more than 80,000?
const SomeUserCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 2500}
    ]
    const SomeAns2 = SomeUserCart.some((cartItem)=> cartItem.price > 80000);
    console.log(SomeAns2); // false



//8] SPLICE() ========================================================================
// start, delete, insert


const SliceArray = ['item1', 'item2', 'item3'];

// delete
const deletedItem = SliceArray.splice(1, 2);
console.log("delted item", deletedItem); //delted item['item2', 'item3']


// insert

const SliceArray2 = ['item1', 'item2', 'item3'];
SliceArray2.splice(1, 0, 'inserted item');
console.log(SliceArray2); //['item1', 'inserted item', 'item2', 'item3']

// insert and Delete

const SliceArray3 = ['item1', 'item2', 'item3'];
SliceArray3.splice(1, 2, "inserted item1", "inserted item2");
console.log(SliceArray3); // ['item1', 'inserted item1', 'inserted item2']