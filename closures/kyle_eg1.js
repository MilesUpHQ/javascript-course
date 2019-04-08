// Closure is when a function "remembers" its lexical scope even when the function is executed outside that lexical scope. - Kyle Simpson

// A function is not a closure, a closure is not a function. A closure is a characteristic of a function in a lexically scoped environment which allows that function to continue to access variables outside of itself even when it is passed to a different location and executed
// - Kyle Simpson

// Below is an example given by @gitify (Kyle Simpson)

function foo() {
  var bar = "bar";
  function baz() {
    console.log(bar);
  }
  bam(baz);
}

function bam(baz) {
  baz(); // "bar"
}

foo();
