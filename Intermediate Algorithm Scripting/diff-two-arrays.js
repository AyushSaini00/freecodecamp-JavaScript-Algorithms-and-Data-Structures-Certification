function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  // console.log(newArr);
  return (newArr.filter(el => arr1.indexOf(el) === -1 || arr2.indexOf(el) === -1));
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
