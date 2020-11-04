/*
- A side effect of the sort method is that it mutates the array in place.
- One way to avoid this is to first concatenate an empty array to the one being sorted, then run the sort method.
*/
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  return [].concat(arr).sort((a,b) => {
    return a-b;
  });
  // Only change code above this line
}
nonMutatingSort(globalArray);
