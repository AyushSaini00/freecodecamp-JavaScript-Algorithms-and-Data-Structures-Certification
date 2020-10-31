function titleCase(str) {
  
  // Storing each word as lowercase in lcsArr array
  let lcsArr = str.toLowerCase().split(' ');
  
  // declaring an empty array for storing title case words
  let titleCaseArr = [];

  //iterating through each word in lcsArr
  for(let i = 0; i < lcsArr.length; i++){
    //storing first character of each word capitalized into 'up' variable
    let up = lcsArr[i].charAt(0).toUpperCase();

    //storing rest of the remaining string into variable 'rest'
    let rest = lcsArr[i].substring(1,lcsArr[i].length);

    // combining both to form original word but now the first character is capitalized
    titleCaseArr[i] = up + rest;
  }

  //now joining all the words with adding necessary space between them and returning the resultant string
  return titleCaseArr.join(" ");
}

titleCase("I'm a little tea pot");
