// Block Scoping: using var + let
// Using let + var in a function scope to signal the difference to the user as told by Kyle Simpson in deep javascript foundation course - frontendMasters

function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

// Another case where var is > let

function lookupRecord(searchStr) {
  try {
    var id = getRecord(searchStr);
  } catch {
    var id = -1;
  }
  return id;
}
