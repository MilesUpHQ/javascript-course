/*
- Implicit binding
- Explicit binding
- new Binding
- window Binding
*/

// where is this function invoked?

var printName = function (name) {
  console.log('Hello' + name);
};
printName('Magesh');

// Implicit binding

var me = {
  name: 'Magesh',
  age: 31,
  printName: function () {
    console.log(this.name);
  }
}

me.printName(); // see what is to the left and use that as this

// Try another example

var printNameMixin = function (obj) {
  obj.printName = function () {
    console.log(this.name);
  }
}

var favActress = {
  name: 'Keerthi Suresh',
  age: 25
}

var favActor = {
  name: 'Ajith',
  age: 40
}

printNameMixin(favActress);
printNameMixin(favActor);

favActor.printName();
favActress.printName();

// another example

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    }
  }
}

var surya = Person('Surya', '40')
surya.printName();

// let's extend that

var Person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },
    father: {
      name: "Siva Kumar",
      age: 75,
      printName: function () {
        console.log(this.name);
      }
    }
  }
}

var surya = Person('Surya', '40')
surya.printName();
surya.father.printName();