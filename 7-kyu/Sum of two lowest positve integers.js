//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
function sumTwoSmallestNumbers(numbers) {  
    //Code here
    for(let i = 0; i < numbers.length; i++){
      for(let j = 0; j < numbers.length; j++){
        let temp = numbers[i];
        if(numbers[i] < numbers[j]){
          numbers[i] = numbers[j];
          numbers[j] = temp
        }
      }
    }
    return numbers[0] + numbers[1];
  }