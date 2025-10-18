function menFromBoys(arr) {
  // Remove duplicates
  arr = [...new Set(arr)];
​
  // Separate evens and odds
  const evens = arr.filter(n => n % 2 === 0).sort((a, b) => a - b); // ascending
  const odds = arr.filter(n => n % 2 !== 0).sort((a, b) => b - a); // descending
​
  // Combine men (evens) then boys (odds)
  return [...evens, ...odds];
}
​