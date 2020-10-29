function factorialize(num) {
  if(num > 0){
    //using recurrsion
    return factorialize(num - 1) * num;
  }else{
    return 1;
  }
}

factorialize(5);
