function checkThreeAndTwo(array) {
  const counts = {};
  
  for (const char of array) {
    counts[char] = (counts[char] || 0) + 1;
  }
​
  const values = Object.values(counts);
  return values.includes(3) && values.includes(2);
}
​