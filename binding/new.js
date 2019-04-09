// 'new' keyword before a function
// It does the below four things
//   - create an empty Object
//   - newly created object is linked to another object
//   - newly created object from step 1 is passed-in to the function as 'this'context
// - return this; is implied if the function doesn't return anything

function foo() {
  this.baz = "baz";
  console.log(this.bar + " " + baz);
}

var bar = "bar";
var baz = new foo(); // constructor call

// Any function with a 'new' keyword put in front of it is called constructor call

// How to create a new 'this' reference? use the 'new' keyword
