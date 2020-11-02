function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs : 4,
  eat: function(){
    console.log("all the day");
  },
  describe: function(){
    console.log("I am a dog and i love humans");
  }
};
