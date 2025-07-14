function nbDig(n, d) {
 // Ensure d is a single character string like '0' … '9'
  const digit = String(d);
​
  let count = 0;
​
  for (let k = 0; k <= n; k++) {
    // Square the number and convert to string once
    const squareStr = String(k * k);
​
    // Count occurrences of `digit` in this square
    // Split trick: "1231".split("1") → ["", "23", ""] (length 3 ⇒ 2 × '1')
    count += squareStr.split(digit).length - 1;
  }
​
  return count;
}