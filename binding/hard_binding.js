// Deep Javascript Foundation eg by Kyle Simpson

function foo() {
  console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

var orig = foo;
foo = function() {
  orig.call(obj);
};

foo(); //  "bar"
foo.call(obj2); // "bar"

// You don't have to do this hard binding since javascripting has a method that does it for you. Guess?
// It is .bind function ( hard bound function )
// Here's an example

function foo(baz, bam) {
  console.log(this.bar + " " + baz + " " + bam);
}

var obj = { bar: "bar" };
foo = foo.bind(obj, "baz"); // ES5 only!!

foo("bam"); // "bar baz bam"
