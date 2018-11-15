// var is global and function scoped
// var can be updated and redefined
// var is hoisted to the top but it is intialized as undefined

// Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function
var greeter = "hey hi";

function newFunction() {
  var hello = "hello";
}
console.log(hello); // error: hello is not defined

// var can be updated and redeclared

var greeter = "hey hi";
var greeter = "say Hello instead";

// also

var greeter = "hey hi";
greeter = "say Hello instead";

// hoisting
console.log(greeter);
var greeter = "say hello"

// the above code works the same manner as
var greeter;
console.log(greeter); //greeter is undefined
greeter = "say hello"

// problem with var is it can be updated anyw

var greeter = "hey hi";
var times = 4;

if (times > 3) {
  var greeter = "say Hello instead";
}

console.log(greeter) //"say Hello instead"
//So, since times > 3 returns true, greeter is redefined to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.
//If you have use greeter in other parts of your code, you might be surprised at the output you might get. This might cause a lot of bugs in your code. This is why the let and const is necessary.