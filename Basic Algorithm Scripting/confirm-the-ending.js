function confirmEnding(str, target) {
  // storing a value in 'len' such that the value corresponds to the starting index of 'target' in 'str'
  let len = str.length - target.length;
  // 'substr' will contain an exact copy of target (if exist) because substring() will extract a substring from str starting from len to str.length+1 (excluding it)
  let substr = str.substring(len, str.length+1);
  //no we can just simply check wheather the extracted string is equal to target or not
  if(substr == target) return true;
  else return false;
}

confirmEnding("Bastian", "n");
