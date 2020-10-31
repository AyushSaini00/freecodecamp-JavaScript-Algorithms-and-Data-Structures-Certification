/*
Objects can have a special type of property, called a method.
Methods are properties that are functions. This adds different behavior to an object.
*/
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();
