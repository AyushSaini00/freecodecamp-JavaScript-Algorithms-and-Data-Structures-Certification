/*
- It's possible to override an inherited method. It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override

- If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:

1. duck => Is eat() defined here? No.
2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
4. Object => JavaScript stopped searching before reaching this level.
*/

function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

//overriding fly() method for Penguin Object
Penguin.prototype.fly = function(){  
    return "Alas, this is a flightless bird.";
}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
