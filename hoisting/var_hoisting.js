//Before hoisting

a;
b;
var a = b;
var b = 2;
b;
a;

// After hoisting it becomes like..

var a;
var b;
a;
b;
a = b;
b = 2;
b;
a;
