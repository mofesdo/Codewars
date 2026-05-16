function getMissingElement(superImportantArray){
  //TODO
  console.log(superImportantArray);
  let sorted = superImportantArray.sort((a,b) => a -b);
  console.log(sorted);
  
  for(let i = 0; i <= sorted.length; i++){
    if(sorted[i] != i){
      return i;
    }
  }
}