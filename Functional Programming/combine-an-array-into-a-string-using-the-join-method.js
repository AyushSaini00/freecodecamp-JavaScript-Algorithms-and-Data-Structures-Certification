/*
- The join method is used to join the elements of an array together to create a string.
- It takes an argument for the delimiter that is used to separate the array elements in the string.
*/
function sentensify(str) {
  // Only change code below this line
  return str
  .split(/\W/) // split the string into an array
  .join(' ');  // join the array elements to form a string in which words are separated by ' ' i.e, space
  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
