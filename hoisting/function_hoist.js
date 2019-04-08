// Before hoisting

var a = b();
var c = d();
a;
c;

function b() {
  return c;
}

var d = function() {
  return b();
};

// After hoisting

function b() {
  return c;
}

var a;
var c;
var d;
a = b();
c = d();
a;
c;

d = function() {
  return b();
};
