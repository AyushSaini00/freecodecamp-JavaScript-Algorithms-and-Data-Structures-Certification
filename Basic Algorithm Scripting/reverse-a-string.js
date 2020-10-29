function reverseString(str) {
  //declaring an empty string
  let reversedStr = '';
  //iterating backwards
  for(let i = str.length -1; i>=0; i--){
    reversedStr += str[i]; //storing the letter from last to first in the reversedStr
  }
  return reversedStr;
}

reverseString("hello");
