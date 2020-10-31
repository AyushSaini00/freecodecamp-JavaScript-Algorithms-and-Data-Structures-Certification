function bouncer(arr) {
  for(let i = 0; i < arr.length; i++){
    // if arr[i] is a falsy value then..
    if(!arr[i]){
      arr.splice(i,1); //remove that falsy value
      i--; // decrease the counter by 1 because splice will modify the arr and the next element will take the place of index i. And since we have already passed that index, it will not check the element at that index
    }
  }
  console.log(arr);
  return arr;
}

bouncer([7, "ate", "", false, 9]);
