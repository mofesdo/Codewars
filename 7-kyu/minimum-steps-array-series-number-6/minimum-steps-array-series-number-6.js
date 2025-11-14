function minimumSteps(numbers, k) {
  numbers.sort((a, b) => a - b);
​
  // If the smallest number already reaches K → 0 steps
  if (numbers[0] >= k) return 0;
​
  let sum = numbers[0];
  let steps = 0;
​
  for (let i = 1; sum < k; i++) {
    sum += numbers[i];
    steps++;
  }
​
  return steps;
}
​