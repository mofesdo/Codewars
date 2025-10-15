function twoHighest(arr) {
  // Remove duplicates with Set, convert back to array, then sort descending
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}
​