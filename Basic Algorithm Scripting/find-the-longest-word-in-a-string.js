//The split() method is used to split a string into an array of substrings, and returns the new array.

function findLongestWordLength(str) {
  let individualWords = str.split(" "); //this will insert space separated words from str into an array called individualWords
  let maxLength = 0; //setting length of the largest word to be 0

  //iterating through the individualWords Array
  for(let i = 0; i < individualWords.length; i++){
    if(individualWords[i].length > maxLength)
      maxLength = individualWords[i].length;
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
