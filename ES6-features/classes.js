class Person {
  constructor(name) {
    this.name = name;
  }
  hello() {
    return "Hello, I am " + this.name + ".";
  }
}

class Actor extends Person {
  hello() {
    return super.hello() + " I am an actor.";
  }
}

var tomCruise = new Actor("Tom Cruise");
console.log(tomCruise.hello());
