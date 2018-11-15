// const declarations are block scoped
// const cannot be updated or re-defined
// const are also hoisted to the top but are not intialized
// While var and let can be declared without being initialized, const must be initialized during declaration.

//It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this
const greeting = "say Hi";
greeting = "say Hello instead";//error : Assignment to constant variable.

//nor this
const greeting = "say Hi";
const greeting = "say Hello instead";//error : Identifier 'greeting' has already been declared

/*
Every const declaration therefore, must be initialized at the time of declaration.
This behavior is somehow different when it comes to objects declared with const. While a const object cannot be updated, the properties of this objects can be updated.
*/

const greeting = {
  message: "say Hi",
  times: 4
}

// we cannot do this
const greeting = {
  words: "Hello",
  number: "five"
}//error :  Assignment to constant variable.

// but we can do this
greeting.message = "say Hello instead";