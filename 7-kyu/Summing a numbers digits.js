// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
function sumDigits(number) {
    let numString = number + "";
    let sum = 0;
    let numArr = []
    for(let i = 0; i< numString.length; i++){
      numArr[i]= Number(numString[i]);
      console.log(numArr[i])
      if(numArr[i] < 0){
        numArr[i] = numArr[i] * -1;
      }
      sum = sum + numArr[i]
      console.log(sum)
    }
    return sum;
  }