// Clone using Object.assign()

const obj = {
    key1: 'value1',
    key2: 'value2'
};
// const obj2 = (...obj);

const obj2 = Object.assign({}, obj);
obj.key3 = 'value3';

console.log(obj);
console.log(obj2);







// ============== OPTIONAL CHAINING ( ? ) ==============

// if key/value is not present in object and we access it that time it return "undefined" instead of error..

const userChain = {
    firstName: 'harshit'
    // address: (houseNumber: '1234')
};
console.log(userChain.firstName);
console.log(userChain.address.houseNumber); //• Uncaught TypeError: Cannot read property "houseNumber" of undefined

// solution:---->

const userChain2 = {
    firstName: 'harshit'
    // address: (houseNumber: '1234')
};
console.log(userChain2?.firstName); //harshit
console.log(userChain2?.address?.houseNumber); //undefined



