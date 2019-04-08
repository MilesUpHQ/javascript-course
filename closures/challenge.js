// Guess the problem with below code

for (var i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log("i: " + i);
  }, i * 1000);
}

// Solution 1: Using IIFE

for (var i = 0; i <= 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log("i: " + i);
    }, i * 1000);
  })(i);
}

// Solution 2: Loops + Block scope

for (var i = 0; i <= 5; i++) {
  let j = i;
  setTimeout(function() {
    console.log("j: " + j);
  }, i * 1000);
}

// Solution 3: loops + block scope (using let)

for (let i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log("i: " + i);
  }, i * 1000);
}
