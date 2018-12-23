//Functions now also support default values

function add(a = 1) {
  return a + 2;
}

console.log(add(2));

//Arrow function

const add = () => {
  return a + 2;
};

// Also written as

const add = a => a + 2;
// console.log(add(1))

//Also written as

const add = () => a + 2;

// Passing arguments

const add = (a, b) => a + b;
