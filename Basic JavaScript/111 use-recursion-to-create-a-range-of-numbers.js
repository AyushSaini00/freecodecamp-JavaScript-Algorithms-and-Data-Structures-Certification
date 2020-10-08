function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum){
    return [endNum];
  }else{
    return [startNum].concat(rangeOfNumbers(startNum +1, endNum));
  }
};
