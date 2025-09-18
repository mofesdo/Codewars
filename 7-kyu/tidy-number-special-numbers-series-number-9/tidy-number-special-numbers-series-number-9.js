function tidyNumber(n) {
  let digits = n.toString().split('').map(Number);
  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] > digits[i + 1]) {
      return false;
    }
  }
  return true;
}
​