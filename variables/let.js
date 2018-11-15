// let is block scoped
// let cannot be re-defined but can be updated
// let is hoisted to the top but it is not intialized

//We see that using hello outside its block(the curly braces where it was defined) returns an error. This is because let variables are block scoped .

let greeting = "say Hi";
let times = 4;

if (times > 3) {
  let hello = "say Hello instead";
  console.log(hello);//"say Hello instead"
}
console.log(hello) // hello is not defined

// let can be updated
let greeting = "say Hi";
greeting = "say Hello instead";

// but redefining it will throw error
let greeting = "say Hi";
let greeting = "say Hello instead";//error: Identifier 'greeting' has already been declared

//However this will work just fine
//Why is there no error? This is because both instances are treated as different variables since they have different scopes.
let greeting = "say Hi";
if (true) {
  let greeting = "say Hello instead";
  console.log(greeting);//"say Hello instead"
}
console.log(greeting);//"say Hi"