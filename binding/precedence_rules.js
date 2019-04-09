// what will be the 'this' context when you call 'new', implicit and explicit binding on an object. It will work based on the below precedence order

// 1. Is the function called by new?
// 2. Is the function called by call() or apply()?
// Note: bind() effectively uses apply()
// 3. Is the function called on a context object?
// 4. DEFAULT: global object (except strict mode)

// precedence example code

function something() {
  this.hello = "hello";
  console.log(this.hello, this.who);
}

var who = "global",
  foobar,
  bazbam,
  obj1 = { who: "obj1", something: something },
  obj2 = { who: "obj2" };

something(); // "hello" "global"
console.log(hello); // "hello"      <-- OOPS!!

obj1.something(); // "hello" "obj1"
console.log(obj1.hello); // "hello"

obj1.something.call(obj2); // "hello" "obj2"
console.log(obj2.hello); // "hello"

foobar = something.bind(obj2);
foobar(); // "hello" "obj2"
foobar.call(obj1); // "hello" "obj2"    <-- STILL "obj2"

bazbam = new something(); // "hello"  undefined
console.log(bazbam.hello); // "hello"

bazbam = new obj1.something(); // "hello" undefined
bazbam = new foobar(); // "hello" undefined  <-- LOOK, not "obj2"
