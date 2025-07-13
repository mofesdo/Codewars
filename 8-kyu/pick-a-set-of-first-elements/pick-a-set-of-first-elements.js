function first(arr, n) {
// If n is omitted (undefined or null) default to 1
  if (n == null) n = 1;
​
  // If n is 0 return an empty array
  if (n === 0) return [];
​
  // Return the first n elements
  return arr.slice(0, n);
}