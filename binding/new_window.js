/*
- Implicit binding
- Explicit binding
- new Binding
- window Binding
*/

// new binding

var Animal = function (color, name, type) {
  // this = {}
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra')
console.log(zebra);

// window binding
var printAge = function () {
  console.log(this.age);
}

var me = {
  age: 25
}
printAge();
window.age = 35;
printAge();

// use strict to avoid such error

var printAge = function () {
  'use strict';
  console.log(this.age);
}

var me = {
  age: 25
}
printAge();
window.age = 35;
printAge();