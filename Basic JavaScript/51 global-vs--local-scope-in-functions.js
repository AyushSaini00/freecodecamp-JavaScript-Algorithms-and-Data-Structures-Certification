//It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.


// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
