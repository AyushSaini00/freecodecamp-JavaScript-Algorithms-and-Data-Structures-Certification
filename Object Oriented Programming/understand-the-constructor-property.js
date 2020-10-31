/*
- The constructor property is a reference to the constructor function that created the instance
- The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.
- Since the constructor property can be overwritten it’s generally better to use the instanceof method to check the type of an object

*/
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
 if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}
