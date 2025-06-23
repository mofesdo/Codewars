function findDigit(num, nth) {
  if (nth <= 0) return -1;
​
  // Convert to absolute value and to string
  const str = Math.abs(num).toString();
​
  // If nth digit does not exist, return 0
  if (nth > str.length) return 0;
​
  // Return the nth digit from the right
  return parseInt(str[str.length - nth]);
}