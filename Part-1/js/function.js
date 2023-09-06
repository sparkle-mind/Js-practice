// Function Declaration:-------------

function normalFun() {
    console.log('function declaration');
}
normalFun();

function funWithPara(num1, num2) {
    console.log('function with parameter ', num1 + num2);
}
funWithPara(5, 2);

// Function Expression :-------------

let funExp = function () {
    console.log('when we assign function name in variable its call function expression ');
};
funExp();

let funExpPara = function (num1, num2) {
    return num1 * num2;
};
console.log(funExpPara(5, 8));

// Arrow Function :--------------

let arwFun = () => {
    console.log(`in arrow function remove "function" and use "( )=>" `);
};
arwFun();

let arwWithPara = (x, y) => {
    return x * y;
};
console.log(arwWithPara(5, 2));

let one = () => 'we can write code in one line when no parameter/input has been pass';
console.log(one());

// if value are even then return "true" otherwise "false":
// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     }else{
//        return false;
//     }
// }

// console.log(isEven(4)); //true

// InShort...

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(5)); //false

// fetch first letter of arguments...
function firstCharc(anyString) {
    return anyString[0].toUpperCase();
}
console.log(firstCharc('Hello')); // H

// its print position(index) of array if its present in array otherwise its return -1

function findTarget(ary, target) {
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] === target) {
            return i;
        }
    }
    return -1;
}
const array = [1, 5, 18, 9, 5];
console.log(findTarget(array, 9));

// CALLBACK FUNCTION ====  function that is passed as an argument to another function.

function myFunc2(name) {
    console.log('inside my func 2');
    console.log(` your name is ${name}`);
}
function myFunc(clback) {
    console.log('hello i am a....');
    clback('Samir'); // Invoke the callback function
}

myFunc(myFunc2); // Pass the function `one` as an argument to `two`

// FUNCTION RETURNING FUNCTION ================

function cirkle() {
    console.log('sam');
    function cirkle_inner() {
        console.log('function returning function...');
    }
    return cirkle_inner;
}
const ans = cirkle();
ans();

// or

// function cirkle() {
// console.log("sam")
//   return function cirkle_inner() {
//     console.log("function returning function...");
//   };
// }

// const ans = cirkle();
// ans();

// =========== SUM OF ALL NUMBERS ===========

const numberz = [5, 3, 2];
function summm(...numbs) {
    let total = 0;
    for (let num of numbs) {
        total = total + num;
    }

    return total;
}
console.log(summm(...numberz));

// ============== IMMEDIATELY  INVOKED FUNCTION EXPRESSION (IIFE) =========================
// ----> This pattern is often used to create private variables and functions that are only accessible within the function scope. It helps prevent naming conflicts and provides a way to structure code in a self-contained manner.

// IN JS........
(function () {
    /* code here */
})();

// IN JQUERY WE WRITE CODE IN BELOW LINE.....

// $( document ).ready(function() {

//   /* code here */

// });
