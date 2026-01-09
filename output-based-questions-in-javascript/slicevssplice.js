// 1.slice() → does NOT change original array

// 📌 Used to copy part of an array

const arr = [1, 2, 3, 4, 5];

const result = arr.slice(1, 4);

console.log(result); // [2, 3, 4]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)

// 2. splice() → CHANGES original array

// 📌 Used to remove / add / replace elements

const arr = [1, 2, 3, 4, 5];

const result = arr.splice(1, 2);

console.log(result); // [2, 3]
console.log(arr);    // [1, 4, 5] (changed)
