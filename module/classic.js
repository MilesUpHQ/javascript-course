// Not a module

var foo = {
  o: { bar: "bar" },
  bar() {
    console.log(this.o.bar);
  }
};

foo.bar(); // "bar"

// Above is not a module because it is not encapsulating anything. No hiding information, everything is accessibile to the outside world. But Modules should be hiding information and give access to onely ones that are really required in public

// Class Module Looks like this

var foo = (function(){
  var o =  { bar: "bar" },
  return {
    bar: function(){
      console.log(o.bar);
    }
  }
})();

foo.bar(); // "bar"


// Let's improve it little more and return a named API
// so that we can use the name to access methods inside the same scope

var foo = (function(){
  var publicAPI = {
    bar: function () {
      publicAPI.baz()
    },
    baz: function () {
      console.log("baz");
    }
  }
  return publicAPI;
})();

foo.bar(); // "baz"

// Advantage?
// Encapsulation (hiding of things) - organize code well and restrict access

// Disadvantage?
// Testability - Difficult to test functions that are hidden