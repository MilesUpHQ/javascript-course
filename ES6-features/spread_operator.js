// Array
let a = [1, 2, 3];

b = [...a];

b = [...a, 4, 5, 6];
console.log(b);

// Object

const myObj = { name: "Magesh" };
const newObj = { ...myObj, company: "Hash14" };

console.log(newObj);

// String

const hey = "hey";
const arr = [...hey];
console.log(arr);

const someFunc = (a, b) => {
  console.log(a, b);
};
const arg = [1, 2];
someFunc(...arg);
