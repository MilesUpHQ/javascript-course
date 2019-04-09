// OLOO ia Object linked to Other Objects
// Kyle Simpsons says he likes OLOO more than ES6 Class Coding Style
// Below is an example program of OLOO

var Foo = {
  init: function(who) {
    this.me = who;
  },
  identify: function() {
    return "I am " + this.me;
  }
};

var Bar = Object.create(Foo);

Bar.speak = function() {
  alert("Hello, " + this.identify() + ".");
};

var b1 = Object.create(Bar);
b1.init("b1");
var b2 = Object.create(Bar);
b2.init("b2");

b1.speak(); // Alerts: "Hello, I am b1."
b2.speak(); // Alerts: "Hello, I am b2."
