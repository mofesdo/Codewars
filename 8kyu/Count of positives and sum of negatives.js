/* Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/
function countPositivesSumNegatives(input) {
    // your code here
    let pos = 0;
    let neg = 0;
    console.log(input)
    if(input == null || input.length == 0){
      return []
    }
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        pos++
      }
      if(input[i] < 0){
        neg = neg + input[i]
      }
    }
    return [pos, neg]
  }