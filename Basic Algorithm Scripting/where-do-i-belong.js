function getIndexToIns(arr, num) {
  //first sorting the arr using bubble sort algo
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){ 
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  //now arr is sorted
  let index = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < num){ //if the element is smaller than num then we move to the next element by increasing the index by 1
      index++;
    }
  }
  return index;
}

getIndexToIns([40, 60], 50);
