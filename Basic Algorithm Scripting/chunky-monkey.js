function chunkArrayInGroups(arr, size) {
  let TwoDarray = [];

  //iterating through arr at interval of size
  for(let i = 0; i< arr.length; i+=size){
    //pushing the copied array into 'TwoDarray'
    TwoDarray.push(arr.slice(i,size+i));
  }
  return TwoDarray;
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
