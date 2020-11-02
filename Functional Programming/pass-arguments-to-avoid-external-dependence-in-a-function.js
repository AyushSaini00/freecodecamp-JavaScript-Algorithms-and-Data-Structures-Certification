/*
- Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
*/
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (fv) {
return ++fv;

  // Only change code above this line
}
