// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  // 1. My method 
  // var newArray = [...s];
  // for(let i = 0; i < newArray.length; i++){
  //   if(newArray[i] % 2 !== 1)
  //     newArray.splice(i, 1);  //delete that element 
  // }

  //2. FCC method using forEach()
  var newArray = [];
  this.forEach(el => {
    if(callback(el) == true) 
      newArray.push(el);  
  });

  //3. FCC method using for loop
  // var newArray = [];
  // for (let i = 0; i < this.length; i++) {
  //   if (callback(this[i]) === true) {
  //     newArray.push(this[i]);
  //   }
  // }
  // Only change code above this line
  // console.log(newArray);
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
