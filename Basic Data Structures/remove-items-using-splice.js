/*
- splice() : remove any number of consecutive elements from anywhere in an array
- splice() can take up to 3 parameters
- The first two parameters of splice() are integers
- first parameter represents the index on the array from which to begin removing elements
- the second parameter indicates the number of elements to delete
*/
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1,4);
// Only change code above this line
console.log(arr);
