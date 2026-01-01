function divisibleByThree(str) {
  let sum = 0;
​
  for (const char of str) {
    sum += char.charCodeAt(0) - 48; // convert digit char to number
  }
​
  while (sum > 3) {
    sum -= 3;
  }
​
  return sum === 0 || sum === 3;
}
​