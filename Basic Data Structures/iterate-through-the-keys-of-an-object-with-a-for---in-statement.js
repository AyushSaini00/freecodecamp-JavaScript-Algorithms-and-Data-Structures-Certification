/*
Iterate Through the Keys of an Object with a for...in Statement

for (let user in users) {
  console.log(user);
}

// logs:
Alan
Jeff
Sarah
Ryan
*/
function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for(let user in usersObj){
    //[square-bracket] notation must be used to call a      variable property name
    if(usersObj[user].online == true) count++;
  }
  return count;
  // Only change code above this line
}
