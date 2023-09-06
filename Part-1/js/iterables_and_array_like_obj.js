// ============================= Iterables =====================================================
// jispe hum for of loop laga sakein..
// string, array are iterable

const firstName = 'Harshit';
for (let char of firstName) {
    console.log(char); //h a r s h i t
}

const items = ['item1', 'item2', 'item3'];
for (let item of items) {
    console.log(item); // item1', 'item2', 'item3
}



// ================ Array like Object =========================
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string

const firstName22 = 'harshit';
console.log(firstName22.length);
console.log(firstName22[2]); //7   r



// ---> Objects is not Iterable...
const users = {
    key1: 'valuel',
    key2: 'value2'
};
for (let item of users) {
    console.log(item);
}
console.log(users); //Uncaught TypeError: users is  not iterable