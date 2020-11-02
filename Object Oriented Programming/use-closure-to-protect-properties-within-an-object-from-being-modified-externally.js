/*
The simplest way to make the public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.
- In JavaScript, a function always has access to the context in which it was created. This is called closure
*/

function Bird() {
  let weight = 15; //private variable
  this.getWeight = function(){
    return weight;
  }
}
