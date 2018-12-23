function doSomethingAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve("I did something"), 3000);
  });
}

// Now

async function doSomething() {
  console.log(await doSomethingAsync());
}
console.log("Before");
doSomething();
console.log("After");
