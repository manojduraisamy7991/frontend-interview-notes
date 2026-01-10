const closure = () => {
  let count = 0;

  return function innerIncrement() {
    return count++;
  };
};

const innerIncrement = closure();

console.log(innerIncrement());
console.log(innerIncrement());
console.log(innerIncrement());
