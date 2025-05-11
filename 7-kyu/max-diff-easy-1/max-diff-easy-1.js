function maxDiff(list) {
  if(list.length == 0){
    return 0;
  }
  let sort = list.sort((a,b) => a - b);
  console.log(sort);
  return Math.abs(sort[0] - sort[sort.length-1]);
};