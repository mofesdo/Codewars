function shorterReverseLonger(a, b) {
  // Treat null values as empty strings
  a = a || '';
  b = b || '';
  
  // Determine which is shorter and which is longer
  if (a.length < b.length) {
    return a + [...b].reverse().join('') + a;
  } else {
    // If a is longer or same length, treat a as longer
    return b + [...a].reverse().join('') + b;
  }
}
​