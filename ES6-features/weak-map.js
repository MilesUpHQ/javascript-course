const AboutAuthor = new WeakMap(); // Create new WeakMap
const currentAge = {}; // key must be an object
const currentCity = {}; // key must be an object
AboutAuthor.set(currentAge, 30); // set Key Values
AboutAuthor.set(currentCity, 'Denver'); // Key Values can be of different data types
console.log(AboutAuthor.has(currentCity)); // Test if WeakMap has a key
AboutAuthor.delete(currentAge); // Delete a key
console.log(AboutAuthor.has(currentAge));

// WeakMap can be used to keep an object's private data private, and they can also be used to keep track of Dom nodes/objects

//Private Date usecase example from popular Javascript expert Nicholas C. Zakas
var Person = (function(){
  var privateData = new WeakMap();

  function Person(name) {
    privateData.set(this, {name: name});
  }

  Person.prototype.getName = function(){
    return privateData.get(this).name;
  };

  return Person;
}());

magesh = new Person("Magesh");
console.log(magesh.getName());