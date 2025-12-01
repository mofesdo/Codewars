function catMouse(str) {
  // number of characters between C and m
  const distance = str.length - 2; 
​
  return distance <= 3 ? "Caught!" : "Escaped!";
}
​