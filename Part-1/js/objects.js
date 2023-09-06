// ============== OBJECT ==============
// object don't have index
// object store key : value pairs



// HOW TO CREATE OBJECT:

const person = {
    name: "samir",
    age: 23,
    hobbies: ["guitar", "gaming", "music"]
  }
  console.log(person);
  console.log(typeof person);
  
  // HOW TO ADD KEY VALUE PAIR TO OBJECTS:
  person.gender = "male";
  console.log(person.gender);
  // HOW TO CHANGE VALUE OF  OBJECTS:
  person.age = 25;
  
  
  // HOW TO ACCESS DATA FROM OBJECTS:
  
  // 1)dot notation...
  console.log(person.name);
  console.log(person.hobbies);
  
  // 2)brackets ......
  alert(person["name"]);
  
  // diff b/w dot and brackets access...
  const object1 = {
    name: "umang",
    age: 21,
    "umang hobbie": ["cricket", "carrom"]
  }
  
  // An error will occur with dot notation like..
  
  // console.log(object1."umang hobbie");
  
  // but its work proper with Brackets.... 
  
  console.log(object1["umang hobbie"]);
  
  // HOW TO ITERATE OBJECT:
  
  const object2 = {
    name: "rinkesh",
    age: 19
  }
  
  for (let key in object2) {
    console.log(key, " : ", object2[key]);
  }
  
  // NOTE:-- We can mostly use "for of " loop to iterate array 
  // NOTE:-- We can mostly use "for in " loop to iterate Object 
  
  
  
  // COMPUTED PROPERTIES (variable convert to object) ...
  
  const key1 = "obj1";
  const key2 = "obj2";
  
  const value1 = "myvalue1";
  const value2 = "myvalue2";
  
  const MyObject = {
    [key1]: value1,
    [key2]: value2,
  }
  console.log(MyObject);
  
  
  
  // SPREAD OPERATOR IN OBJECT: 
  
  const SpObj1 = {
    zen1: "obj1",
    zen2: "obj2",
  }
  
  const SpObj2 = {
    zen3: "obj3",
    zen4: "obj4",
  }
  
  
  // const mixed = { ...SpObj1, ...SpObj2, zen99: "add any key-value pair here" };
  // console.log(mixed);
  
  
  // const newObj1=[...abcdefghijklmnopqxyz] // spread method only spread iterable value like string,array,object..
  const newObj1 = { ..."abcdefghijklmnopqrstuvwxyz" }
  console.log(newObj1);
  // how to get object length..
  
  const newObj5 = { ...'abcdefghijklmnopqrstuvwxyz' };
  const length = Object.keys(newObj5).length;
  console.log(length); //26
  
  
  // OBJECT CLONE ============
  
  //  1) using spread method :
  
  const cl1 = {
    brandName: "odi",
    Modal: "533D"
  }
  console.log(cl1);
  
  const cloned = { ...cl1 };
  console.log(cl1 === cloned); //false
  console.log(cloned);
  
  
  // 2)Object.assign():
  const originalObject = { key: "value" };
  const clonedObject = Object.assign({}, originalObject);
  console.log(clonedObject === originalObject); //false
  console.log(clonedObject);
  
  
  // OBJECT DESTRUCTURING  :==== // Objects value convert to variable..
  
  const DestrObj = {
    bandName: "yo yo band",
    song: "jawaani ...",
    year: 1998
  }
  let { bandName, year } = DestrObj;
  console.log(bandName);
  console.log(year);
  
  // ---- u can define your own variable name like "newData1" ----
  
  // let { bandName: newData1, year: newData2 } = DestrObj;
  // console.log(newData1);
  // console.log(newData2);
  
  
  // OBJECT INSIDE ARRAY =====================
  
  const users = [
    { userId: 1, firstName: "samir", age: 23 },
    { userId: 2, firstName: "umang", age: 21 },
    { userId: 3, firstName: "rin", age: 19 },
  ];
  // for (let user of users) {
  //     console.log(user.firstName);
  // } 
  
  // --- we can alse  fetch objcet from array like... 
  const [sam1, sam2, sam3] = users;
  console.log(sam2);
  
  