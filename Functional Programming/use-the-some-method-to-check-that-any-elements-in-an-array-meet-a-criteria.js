/*
- The some method works with arrays to check if any element passes a particular test.
- It returns a Boolean value - true if any of the values meet the criteria, false if not.
*/
function checkPositive(arr) {
  // Only change code below this line
  return arr.some(el => el > 0);
  // Only change code above this line
}
checkPositive([1, 2, 3, -4, 5]);
