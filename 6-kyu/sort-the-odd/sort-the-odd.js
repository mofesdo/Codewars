function sortArray(array) {
  // Return a sorted array.
  let odds = array.filter((ele) => Math.abs(ele)%2 == 1).sort((a,b) => a-b);
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(Math.abs(array[i]) % 2 == 1){
      array[i] = odds[count];
      count++
    }
  }
  return array;
}