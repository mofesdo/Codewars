function sumOfN(n) {
  const result = [];
  let sum = 0;
​
  for (let i = 0; i <= Math.abs(n); i++) {
    sum += n < 0 ? -i : i; // add negative or positive term
    result.push(sum);
  }
​
  return result;
}
​