function foo() {
  var bar = 0;

  setTimeout(function() {
    var baz = 1;
    console.log(bar);

    setTimeout(function() {
      console.log(bar + baz);
    }, 200);
  }, 100);
}

foo(); //0 2
