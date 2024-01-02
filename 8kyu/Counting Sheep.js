function countSheeps(sheep) {
  // TODO
  count = 0;
  for(let i = 0; i<sheep.length; i++){
    if(sheep[i] == true){
      count ++;
    }
  }
  return count;
}