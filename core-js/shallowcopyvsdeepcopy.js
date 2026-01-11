// 1. Shallow Copy 
const obj = {
  name: "Alice",
  address: { city: "NYC" }
};

const shallowCopy = { ...obj }; // Spread operator

shallowCopy.name = "Bob";
shallowCopy.address.city = "LA";

console.log(obj.name); // Alice → top-level change did NOT affect original
console.log(obj.address.city); // LA → nested object is affected!

// 2. Deep Copy 
/*Limitations of JSON method:
Fails on functions, undefined, Date, RegExp
Can only handle JSON-serializable objects*/

const objDeep = {
  name: "Alice",
  address: { city: "NYC" },
    date: new Date()

};

const deepCopy = JSON.parse(JSON.stringify(objDeep))
deepCopy.address.city = "LA";
objDeep.date.setFullYear(2000);
console.log(objDeep.date.getFullYear()); // current year → original affected
console.log(objDeep.address.city); // NYC → original NOT affected

// 3. StructuredClone available in modern environments
const objNew = {
  name: "Alice",
  age: 25,
  address: { city: "NYC" },
  date: new Date()
};

const fullDeepCopy = structuredClone(objNew);

fullDeepCopy.address.city = "LA";
fullDeepCopy.date.setFullYear(2000);

console.log(objNew.address.city); // NYC → original NOT affected
console.log(objNew.date.getFullYear()); // current year → original NOT affected