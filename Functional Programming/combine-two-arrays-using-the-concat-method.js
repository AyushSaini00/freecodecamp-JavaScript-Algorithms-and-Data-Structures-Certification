/*
- JavaScript offers the concat method for both strings and arrays that work in the same way. 
- For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array.
- It returns a new array and does not mutate either of the original arrays.
- Example-
- [1, 2, 3].concat([4, 5, 6]);
  // Returns a new array [1, 2, 3, 4, 5, 6]

*/
function nonMutatingConcat(original, attach) {
  // Only change code below this line
return original.concat(attach);
  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
