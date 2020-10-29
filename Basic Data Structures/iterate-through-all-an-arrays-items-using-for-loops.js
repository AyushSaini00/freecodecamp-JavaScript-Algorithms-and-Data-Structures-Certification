function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line

  //Method 1 (FCC proived in hint)

  // for(let i = 0; i < arr.length; i++){
  //   if(arr[i].indexOf(elem) == -1){
  //     newArr.push(arr[i]);
  //   }
  // }

  //Method 2

  for(let i = 0; i < arr.length; i++){
    let hasElem = false;
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] === elem){
        hasElem = true;
        break;
      }
    }
    if(!hasElem){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
