// Sample data
const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Alex", age: 30 },
  { id: 3, name: "Sam", age: 30 }
];

// ✅ find() → returns FIRST match
const findUser = users.find(user => user.age === 30);
console.log("find result:", findUser);

// ✅ filter() → returns ALL matches
const filterUsers = users.filter(user => user.age === 30);
console.log("filter result:", filterUsers);
// find result: { id: 2, name: "Alex", age: 30 }

// filter result: [
//   { id: 2, name: "Alex", age: 30 },
//   { id: 3, name: "Sam", age: 30 }
// ]
