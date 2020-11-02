/*
- In Functional Programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
*/
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  let localfixedValue = fixedValue;
  localfixedValue++;
  return localfixedValue;
  // Only change code above this line
}
