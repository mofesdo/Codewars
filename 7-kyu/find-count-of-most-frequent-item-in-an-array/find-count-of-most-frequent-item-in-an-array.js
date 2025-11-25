function mostFrequentItemCount(collection) {
  let sort = [...collection].sort((a,b) => a - b);
  let count = 1;
  let highest = 1;
  
  if(sort.length == 0){
    return 0;
  }
  if(sort.length == 1){
    return 1;
  }
  
  for(let i = 1; i < sort.length; i++){
    if(sort[i-1] == sort[i]){
      count++;
      if(count > highest){
        highest = count;
      }
    }
    else {
      count = 1;
    }
  }
  return highest;
}