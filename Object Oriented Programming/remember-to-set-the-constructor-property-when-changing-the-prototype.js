/*
There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! This property can be used to check which constructor function created the instance
*/
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, //define the constructor property
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
