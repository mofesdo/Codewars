function getStrings(city) {
  const counts = {};
  const order = [];
​
  for (let char of city.toLowerCase()) {
    if (/[a-z]/.test(char)) {
      if (!counts[char]) {
        counts[char] = 1;
        order.push(char); // track first appearance
      } else {
        counts[char]++;
      }
    }
  }
​
  return order
    .map(letter => `${letter}:${'*'.repeat(counts[letter])}`)
    .join(',');
}