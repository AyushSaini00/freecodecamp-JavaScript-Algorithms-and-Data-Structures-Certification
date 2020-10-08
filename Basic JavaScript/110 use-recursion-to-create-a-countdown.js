// Only change code below this line
function countdown(n){
  if(n < 1){
    return [];
  }else {
    //concat() method is used to join two or more arrays
    //syntax -
    //array1.concat(array2, array3, ..., arrayX)
    return [n].concat(countdown(n-1));
  }  
}
// Only change code above this line
