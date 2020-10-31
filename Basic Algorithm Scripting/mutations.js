function mutation(arr) {
  // lowercasing all the strings
  let lcarr = [arr[0].toLowerCase(), arr[1].toLowerCase()];

  // storing them in individual arrays with each letter separated to ease the process of comparing
  let str1arr = lcarr[0].split("");
  let str2arr = lcarr[1].split("");

//iterating through all the letters of the str2arr
  for(let i = 0; i < str2arr.length; i++){

    // if any letter of str1arr does not exist in the str2arr then return false
    if(str1arr.indexOf(str2arr[i]) < 0) 
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);
