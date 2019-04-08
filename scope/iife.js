// Immediately Invoked Function Expression

var foo = "foo";

// This function name bob doesn't pollute the scope it is in. you can use bob name in the same scope to define another function or variable without a problem
(function bob() {
  var foo = "foo2";
  console.log(foo); // "foo2"
})();

// we create the above IIFE because we want to use two set of foo var in the same scope which has different references but cannot be confused with each other that is why you would use an IIFE

console.log(foo); // "foo"

// --------------------------------------------------------------------
// IIFE inside for loop

for (i = 0; i < 5; i++) {
  (function IIFE() {
    var j = i;
    console.log(j);
  })();
}
// Above, j is created again and again during each loop because I need it to be created like that every time instead of just changing the reference
