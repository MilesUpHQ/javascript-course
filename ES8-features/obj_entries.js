// This method returns an array containing all the object own properties, as an array of [key, value] pairs.

// Usage:

const person = { name: "Fred", age: 87 };
Object.entries(person); // [['name', 'Fred'], ['age', 87]]

// Object.entries() also works with arrays:

const people = ["Fred", "Tony"];
Object.entries(people); // [['0', 'Fred'], ['1', 'Tony']]
