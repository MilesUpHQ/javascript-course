// A closure is a function having access to the parent scope, even after the parent function has closed.

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// The variable add is assigned the return value of a self-invoking function.

// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.



// the counter is now 3
// Closures contain a function and a reference to the environment in which the function was created.
// A closure is formed when an outer function exposes an inner function.
// Closures can be used to easily pass parameters to callback functions.
// Private data can be emulated by using closures.  This is common in object-oriented programming and namespace design.
// Closures should be not overused in constructors.  Adding to the prototype is a better idea.

// Creating closures
function add(value1) {
  return function doAdd(value2) {
    return value1 + value2;
  };
}

var increment = add(1);
var foo = increment(2);
console.log(foo)
// foo equals 3
