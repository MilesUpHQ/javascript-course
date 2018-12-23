//iterate over the value
for (const v of ["a", "b", "c"]) {
  console.log(v);
}
//get the index as well, using `entries()`
for (const [i, v] of ["a", "b", "c"].entries()) {
  console.log(i, v);
}

var obj = { first: "Magesh", last: "S" };

for (const key of Object.keys(obj)) {
  console.log(key, obj[key]);
}

// You can use the for-in loop as shown by others. However, you also have to make sure that the key you get is an actual property of an object, and doesn't come from the prototype.

var p = {
  p1: "value1",
  p2: "value2",
  p3: "value3"
};

for (var key in p) {
  if (p.hasOwnProperty(key)) {
    console.log(key + " -> " + p[key]);
  }
}
