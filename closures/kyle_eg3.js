// SetTimout example

function foo() {
  var bar = "bar";

  setTimeout(function() {
    console.log(bar);
  }, 1000);
}

foo();

// Click Handler example

function foo() {
  var bar = "bar";

  $("#btn").click(function(evt) {
    console.log(bar);
  });
}

foo();
