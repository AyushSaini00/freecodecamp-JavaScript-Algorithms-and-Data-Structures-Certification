/*
- A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.

- For example, Bird is a constructor that inherits its prototype from Animal
*/

function Animal() { } //Animal constructor
Animal.prototype.eat = function() { console.log("nom nom nom"); }; // prototype property eat is added to Animal constructor

function Dog() { } //Dog constructor

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype); //step 2 of inheritance: setting the prototype of subtype (Dog) to be an instance of Animal

Dog.prototype.constructor = Dog; //setting the constructor for Dog to be Dog because when we inherited from Animal, we also inherited it's constructor

Dog.prototype.bark = function(){ //adding a special method to Dog objects
    console.log("Woof!");
}
// Only change code above this line

let beagle = new Dog();
