function maxRot(n) {
  let str = n.toString();
  let max = n;
​
  for (let i = 0; i < str.length - 1; i++) {
    // Rotate part of the string
    str = str.slice(0, i) + str.slice(i + 1) + str[i];
    const rotated = parseInt(str, 10);
    if (rotated > max) {
      max = rotated;
    }
  }
​
  return max;
}