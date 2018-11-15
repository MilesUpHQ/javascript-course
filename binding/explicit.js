/*
- Implicit binding
- Explicit binding
- new Binding
- window Binding
*/

// where is this function invoked?
//Explicit Binding
// call, apply, bind

var printName = function () {
  console.log('My name is ' + this.name);
}

var stanlee = {
  name: 'Stan Lee',
  age: '95'
}

printName.call(stanlee);

// passing few more arguments to the function

var printName = function (lang1, lang2) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ' and ' + lang2);
}

var stanlee = {
  name: 'Stan Lee',
  age: '95'
}
var lang = ['Javascript', 'Ruby']
printName.call(stanlee, lang[0], lang[1])

//Apply
printName.apply(stanlee, lang)

//bind
var newFn = printName.bind(stanlee, lang[0], lang[1]);
console.log('We are HERE');
newFn();