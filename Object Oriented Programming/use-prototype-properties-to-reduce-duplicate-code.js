/*
- Properties in the prototype are shared among ALL instances of Constructor
- ConstructorName.prototype.propertyName = value;
- Now all instances of ConstructorName have the propertyName property
- Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects
-  Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it
*/
function Dog(name) {
  this.name = name;
}
// Only change code above this line
let beagle = new Dog("Snoopy");

Dog.prototype.numLegs = 4;
