let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve("Cleaned the room");
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " remove Garbage");
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + " won Icecream");
  });
};

// cleanRoom()
//   .then(function(result) {
//     return removeGarbage(result);
//   })
//   .then(function(result) {
//     return winIcecream(result);
//   })
//   .then(function(result) {
//     console.log("finished " + result);
//   });

// Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(function() {
//   console.log("All finished");
// });

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then(function(
  result
) {
  console.log("One of them is finished", result);
});

// Usage of all
// I've used it for request batching. We had to batch tens of thousands of records into batches for a long running execution. We could do it in parallel, but didn't want the number of pending requests to get out of hand.

// Race usage
// an easy example to understand the use of promise.race():

// Imagine you need to fetch some data from a server and if the data takes too long to load (say 15 seconds) you want to show an error.

// You would call promise.race() with two promises, the first being your ajax request and the second being a simple setTimeout(() => resolve("ERROR"), 15000)

// another example, one might show a spinner "instantly" while still defaulting to show real content if it comes in fast enough. Try running the below a few times - note at least some console message comes "instantly". This might normally be attached to perform operations on a UI.

//The key to note is - the result of Promise.race is much less important than the side effects (though, this then is a code smell).
