function repeatStringNumTimes(str, num) {
  let repeat = "";
  if(num > 0){
    for(let i = 0; i < num; i++){
      //adding the str to repeat num number of times
       repeat += str;
    }
    return repeat;
  }else{
    return repeat;
  }
}

repeatStringNumTimes("abc", 3);
