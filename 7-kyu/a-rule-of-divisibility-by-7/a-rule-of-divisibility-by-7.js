function seven(m) {
  let steps = 0;
​
  while (m >= 100) {   // stop when number has at most 2 digits
    let y = m % 10;    // last digit
    let x = Math.floor(m / 10); // rest of digits
    m = x - 2 * y;
    steps++;
  }
​
  return [m, steps];
}