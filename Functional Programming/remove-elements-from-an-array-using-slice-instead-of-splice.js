/*
- A common pattern while working with arrays is when you want to remove items and keep the rest of the array. 
- JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove.
- If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on.
*/
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0,3);

  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);
