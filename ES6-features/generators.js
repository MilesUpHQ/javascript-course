// Imagine you are reading a nail-biting techno-thriller. All engrossed in the pages of the book, you barely hear your doorbell ring. It’s the pizza delivery guy. You get up to open the door. However, before doing that, you set a bookmark at the last page you read. You mentally save the events of the plot. Then, you go and get your pizza. Once you return back to your room, you begin the book from the page that you set the bookmark on. You don’t begin it from the first page again. In a sense, you acted as a generator function.

// Here are some other common definitions of generators —

// Generators are a special class of functions that simplify the task of writing iterators.

// A generator is a function that produces a sequence of results instead of a single value, i.e you generate ​a series of values.

function* generatorFunction() {
  // Line 1
  console.log("This will be executed first.");
  yield "Hello, "; // Line 2
  console.log("I will be printed after the pause");
  yield "World!";
}

const generatorObject = generatorFunction();

// console.log(generatorObject.next().value);

setTimeout(() => {
  console.log(generatorObject.next().value);
}, 2000);

setTimeout(() => {
  console.log(generatorObject.next().value);
}, 4000);

// We can also return from a generator. However, return sets the done property to true after which the generator cannot generate any more values.

// function *  generatorFunc() {
//   yield 'a';
//   return 'b'; // Generator ends here.
//   yield 'a'; // Will never be executed.
// }

// Create iterables with generator

// function * iterableObj() {
//   yield 'This';
//   yield 'is';
//   yield 'iterable.'
// }
// for (const val of iterableObj()) {
//   console.log(val);
// }
// This
// is
// iterable.
