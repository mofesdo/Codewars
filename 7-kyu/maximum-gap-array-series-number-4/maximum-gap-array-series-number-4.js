function maxGap(numbers) {
  // Sort the array in ascending order
  numbers.sort((a, b) => a - b);
  
  // Track the maximum gap
  let maxDiff = 0;
  
  // Loop through and find the largest difference between successive elements
  for (let i = 0; i < numbers.length - 1; i++) {
    const diff = Math.abs(numbers[i + 1] - numbers[i]);
    if (diff > maxDiff) maxDiff = diff;
  }
  
  return maxDiff;
}
​