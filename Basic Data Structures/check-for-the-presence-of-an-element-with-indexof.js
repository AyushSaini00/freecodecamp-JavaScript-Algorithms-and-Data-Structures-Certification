/*
- indexOf() Method -
indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array
*/

function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) === -1 ? false : true ; 
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
