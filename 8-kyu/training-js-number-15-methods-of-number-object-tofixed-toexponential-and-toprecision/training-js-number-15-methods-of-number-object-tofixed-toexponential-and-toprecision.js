function howManySmaller(arr, n) {
  // Step 1: keep two decimal places
  const fixed = arr.map(x => +x.toFixed(2));  // + converts back to number
​
  // Step 2: count how many are smaller than n
  let count = 0;
  for (let i = 0; i < fixed.length; i++) {
    if (fixed[i] < n) count++;
  }
​
  return count;
}
​