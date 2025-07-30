function strong(n) {
 // Helper to calculate factorial
  function factorial(x) {
    return x <= 1 ? 1 : x * factorial(x - 1);
  }
​
  // Sum of factorial of digits
  const sum = n
    .toString()
    .split('')
    .map(d => factorial(+d))
    .reduce((a, b) => a + b, 0);
​
  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}