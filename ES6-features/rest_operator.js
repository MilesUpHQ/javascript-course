// destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

// const numbers = [1, 2, 3, 4, 5];
let sum = (a, b, c, d, e) => a + b + c + d + e;
sum = sum(...numbers);

const obj = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 };
const { first, second, ...others } = obj;

const items = { first, second, ...obj };
console.log(items); //{ first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
