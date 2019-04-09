function Foo(who) {
  this.me = who;
}

Foo.prototype.identify = function() {
  return "I am " + this.me;
};

var a1 = new Foo("a1");
a1.identify(); // "I am a1"

a1.identify = function() {
  // <-- Shadowing
  alert("Hello, " + this.identify() + ".");
};

a1.identify(); // Error: infinite recursion
