function sumOfIntegersInString(s) {
  // Match all sequences of digits
  const numbers = s.match(/\d+/g);
  
  if (!numbers) return 0; // no numbers found
  
  return numbers.reduce((sum, num) => sum + +num, 0);
}
​