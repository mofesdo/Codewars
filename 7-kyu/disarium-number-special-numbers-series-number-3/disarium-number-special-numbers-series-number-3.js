function disariumNumber(n) {
  const digits = String(n).split('');
  const sum = digits.reduce((acc, digit, i) => {
    return acc + Math.pow(Number(digit), i + 1);
  }, 0);
  return sum === n ? "Disarium !!" : "Not !!";
}
​