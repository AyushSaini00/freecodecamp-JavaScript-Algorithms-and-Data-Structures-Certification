                       //inheritance
/*
- first step: make an instance of the supertype (or parent)
- Object.create(obj) creates a new object, and sets obj as the new object's prototype
*/
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
