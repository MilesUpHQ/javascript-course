// Function foo returns another function which has access to the var bar outside the lexical scope, that is closure

function foo() {
  var bar = "bar";

  return function() {
    console.log(bar);
  };
}

function bam() {
  foo()(); // "bar"
}

bam();
