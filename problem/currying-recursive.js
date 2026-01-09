function add(a) {
  console.log(a); // 👈 log current accumulated value

  return function (b) {
             console.log(a,b); // 👈 log current accumulated value
    if (b !== undefined) {
      return add(a + b);
    }
    return a;
  };
}

console.log("Result:", add(1)(2)(3)());
