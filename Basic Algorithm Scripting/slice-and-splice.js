function frankenSplice(arr1, arr2, n) {
  //Method 1 
  // let newarr2 = arr2.slice();
  // for(let i = 0; i < arr1.length; i++){
  //   newarr2.splice(n, 0, arr1[i]);
  //   n++;
  // }
  // return newarr2;

  //Method 2 
  let newarr2 = arr2.slice();
  //adding arr1 at index n using spread operator
  newarr2.splice(n, 0, ...arr1);
  return newarr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
