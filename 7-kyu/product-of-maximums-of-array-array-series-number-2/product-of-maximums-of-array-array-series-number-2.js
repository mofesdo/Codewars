function maxProduct(numbers, size){
  return numbers
    .sort((a, b) => b - a)   // sort descending
    .slice(0, size)             // take k largest
    .reduce((prod, num) => prod * num, 1); // multiply
​
}