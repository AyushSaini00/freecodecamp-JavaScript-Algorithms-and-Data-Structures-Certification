/*
- The map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.
- In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.
*/


// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [...s];
  // Only change code below this line
  for(let i = 0; i < newArray.length; i++){
    newArray[i] *= 2;
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
