
// PRIMITIVE DATA TYPE: ---->  Number, String, Boolean, Undefined, Null and Symbol
// it store single data ...
// it store in stack memory..
// if we change first value then second value not changed.. like...

let var1 = 5;
let var2 = var1;
console.log(var1);
// console.log(var1 ===var2);
var1++; // its effect only "var1" not "var2"..
console.log(var1);
console.log(var2);



// REFERENCE/NON-PRIMITIVE DATA TYPE :-------> 1)array 2)object
// it store Multiple data ...
// Mostly declare with const...
// array/obj store in heap memory..
//  if we change first value then second value must be changed.. like...

const ary1 = ["item1", "item2"];

const ary2 = ary1;
// console.log(ary1 === ary2); 
ary1.push("item3") // its also effect ary2..
console.log(ary1);
console.log(ary2);



// HOW TO CLONE ARRAY:==================
// 1) Using Slice() Method:

let ar1 = ["ar1", "ar2"];
let ar2 = ar1.slice(0);
console.log(ar1 === ar2);  // now abc and cdf are different array thats why it return false
console.log(ar2);


// 2) Using spread (...) Method: 
let abc = ["abc", "dfg"];
let cloned = [...abc];
console.log(abc);
console.log(abc === cloned); // now abc and cloned are different array thats why it return false
console.log(cloned);

// HOW TO CONCATENATE TWO ARRAYS:================
// concat :
const con1 = ["con1", "con2"];
const con2 = ["con3", "con4"];
console.log(con1.concat(con2, "add also"));
// push :
const dev1 = ["dev1", "dev2"];
const dev2 = ["dev3", "dev4"];
console.log(dev1.push(dev2));

// Spread :

const sp1 = ["sp1", "sp2"];
const sp2 = ["sp3", "sp4"];
const combined = [...sp1, ...sp2, "add whatever we want", 55];
console.log(combined);



// Convert STRING TO ARRAY :---
let a = "12345";
let b = [...a];
// let b= {...a}; // convert in object
console.log(b);
console.log(Array.isArray(b));
console.log(typeof b);



// "FOR" LOOP IN ARRAY: ========

const fruits = ["apple", "mango", "banana", "grapes"];
//  for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
//     // console.log(fruits[fruits.length -1]); get last value of an array
//  }


// "FOR OF" LOOP IN ARRAY: ========
for (let fruit of fruits) {
  console.log(fruit);
  // console.log(fruit.toUpperCase()); 
  // console.log(fruits);// when we print fruits its print objects as much as fruits length..
}



// ====== FIND STRING WHICH HAS  6 LETTER .....
const finding = ["sam", "mango", "longers", "banana", "grapes"];
function checkFruitLength() {
  const fruitsWithSixLetters = [];

  for (let i = 0; i < finding.length; i++) {
    if (finding[i].length === 6) {
      fruitsWithSixLetters.push(finding[i]);
    }
  }

  return fruitsWithSixLetters;
}

console.log(checkFruitLength());

// FIND BIG NUMBER OF AN ARRAY =================

 const bignum = [5, 80, 90, 2, 5];

function findBigNum() {
  let maxNum = bignum[0];

  for (let i = 1; i < bignum.length; i++) {
    if (bignum[i] > maxNum) {
      maxNum = bignum[i];
    }
  }

  return maxNum;
}

console.log(findBigNum());



//  ARRAY DESTRUCTURING :======== // array value convert to variable..

const myArray = ["ball", "bat", "stumps", 5];

// console.log("first value of array is", myArray[0]); 
// console.log("third value of array is", myArray[2]);

// ...OR...

let [frst, , , four] = myArray;
console.log("first value of array is", frst); // ball
console.log("third value of array is", four); // 5


// slice :

const slArr = ["a", "b", "c", "d"];
const res = slArr.slice(2);
console.log(res); // [c,d]

// ========== SUM OF ALL ARRAY NUMBER =========

let mainAry = [5, 8, 9, 4];

function sum(arr) {
  let t = 0;
  for (let i = 0; i < arr.length; i++) {
    t = t + arr[i];
  }
  return t;
}

console.log(sum(mainAry));


