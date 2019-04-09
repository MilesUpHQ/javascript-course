// Kyle Simpson Example

function foo() {
  console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar2" };

foo(); // "bar1"
foo.call(obj); // "bar2"
