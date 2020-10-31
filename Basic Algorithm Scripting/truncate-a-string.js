function truncateString(str, num) {
  let lenStr = str.length;
  if(lenStr > num){
    let newStr = str.substring(0,num);
    return newStr + '...';
  }else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
