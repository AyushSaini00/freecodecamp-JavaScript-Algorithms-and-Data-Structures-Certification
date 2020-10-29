/*
1. the push() method adds elements to the end of an array 2.2. unshift() adds elements to the beginning.
*/

function mixedNumbers(arr) {
  // Only change code below this line
arr.push(7, 'VIII', 9);
arr.unshift('I', 2, 'three');
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
