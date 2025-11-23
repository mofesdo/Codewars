function elevatorDistance(array) {
  let sum = 0;
  for(let i = 1; i < array.length; i++){
    sum = sum + Math.abs(array[i-1] - array[i]);
  }
  return sum;
}