console.log("start");

async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

test();
console.log("end");
