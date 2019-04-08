function foo() {
  var bar = 0;

  setTimeout(function() {
    console.log(bar++);
  }, 100);
  setTimeout(function() {
    console.log(bar++);
  }, 200);
}

foo(); // 0 1
