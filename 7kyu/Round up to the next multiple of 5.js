/* Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
*/
function roundToNext5(n){
  // ...
  if(n%5 != 0){
    if(n >= 0){
     return n - n%5 + 5 
    }
    else{
      return n - n%5 
    }
  }
  return n
}