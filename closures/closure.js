// A closure is a function having access to the parent scope, even after the parent function has closed.

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

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
//console.log(increment);
var foo = increment(2);
console.log(foo);
// foo equals 3

//One common usage of closures is to provide information-hiding, which is helpful in bringing some kind of encapsulation to the language.

// Let's say you want a function that you can use to return a unique "id" value to use when you create new DOM elements. Now, in something like Java, you could create a class with an internal private counter, and then have a method that appends the counter to some prefix string. Well, in Javascript:

var getId = (function() {
  var counter = 0;
  return function() {
    return "prefix" + counter++;
  };
})();

// Now the variable "getId" is bound to a function that's created by another function, and created in such a way that it has a persistent variable to use between invocations. Similarly, if I wanted to have a family of "getId" functions (say, one for each type of DOM element I might add), I could do this:

var getIdFunc = function(prefix) {
  var counter = 0;
  return function() {
    return prefix + counter++;
  };
};
var getId = {
  div: getIdFunc("div"),
  span: getIdFunc("span"),
  dl: getIdFunc("dl")
  // ...
};
console.log(getId.div());

// Now I can call getId.div() to get a new "id" value for a new <div>. The function was created by calling a function that provides two values stashed away in a closure: the prefix string (passed in as an argument) and the counter (a var declared in the closure scope).

// Once you get used to it, the facility is so flexible and useful that you'll feel pain at moving back to an environment without it.

// Oh, and here's a tip to help keep you off StackOverflow should you try this out: it's an issue that pops up all the time:

// Another common usage is when binding event handlers to elements. E.g.

for (var i = 0; i < 10; ++i) {
  var id = "foo" + i;
  var element = document.getElementById(id);
  element.onclick = function() {
    alert("hello from element " + i);
  };
}

// What's the problem here? Well, that "i" variable that's referenced by that function is the "i" from the scope in which that loop runs. That variable, you'll note, gets incremented through the loop (duhh, right?). Well, every single one of those little functions created and assigned as event handlers will share that same, single variable "i" in the closure scope. Oops! The solution is to do something like this:

for (var i = 0; i < 10; ++i) {
  var id = "foo" + i;
  var element = document.getElementById(id);
  element.onclick = (function(iCopy) {
    return function() {
      alert("hello from element " + iCopy);
    };
  })(i);
}

// We make a copy of the outer "i" into a closure scope of its own, so now each event handler has its own!

// To summarize: the technique of leveraging closures comes up all the freaking time once you get used to it. It's not a free ticket into a new wonderland of error-free programming; don't get me wrong. It is, however, a very useful and flexible paradigm.

// Emulating private methods with closures

// Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

// JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

// The following code illustrates how to use closures to define public functions that can access private functions and variables. Using closures in this way is known as the module pattern:

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

// In previous examples, each closure has had its own lexical environment. Here, though, we create a single lexical environment that is shared by three functions: counter.increment, counter.decrement, and counter.value.

// The shared lexical environment is created in the body of an anonymous function, which is executed as soon as it has been defined. The lexical environment contains two private items: a variable called privateCounter and a function called changeBy. Neither of these private items can be accessed directly from outside the anonymous function. Instead, they must be accessed by the three public functions that are returned from the anonymous wrapper.

// Those three public functions are closures that share the same environment. Thanks to JavaScript's lexical scoping, they each have access to the privateCounter variable and changeBy function.
