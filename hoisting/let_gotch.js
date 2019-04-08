function foo(bar) {
  if (bar) {
    console.log(baz); // Reference error because let doesn't get initialized when hoisting
    let baz = bar;
  }
}

foo("bar");
