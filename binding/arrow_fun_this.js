// Arrow function don't have a 'this' it takes it from the lexical scope

function foo() {
  return () => this.bar;
}

var bar = "bar1";
var o1 = { bar: "bar2", foo: foo };
var o2 = { bar: "bar3" };

var f1 = foo();
var f2 = o1.foo();
var f3 = foo.call(o2);

f1(); // "bar1"
f2(); // "bar2"
f3(); // "bar3"

f1.call(o2); // "bar1"    <-- hmm..
