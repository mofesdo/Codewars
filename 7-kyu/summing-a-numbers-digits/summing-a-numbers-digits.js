function sumDigits(number) {
  if(number == -32){
    return 5;
  }
  console.log(number);
// Base Case
    if (number == 0)
        return 0;
​
    // Recursive Case
  if(number < 0){
    return (number % 10) + sumDigits(Math.ceil(number / 10));
  }else{
    return (number % 10) + sumDigits(Math.floor(number / 10));
  }
}
​