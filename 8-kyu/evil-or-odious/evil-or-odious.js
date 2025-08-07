function evil(n) {
  const binary = n.toString(2); // Convert number to binary
  const ones = binary.split('').filter(bit => bit === '1').length; // Count 1's
​
  return ones % 2 === 0 ? "It's Evil!" : "It's Odious!";
}