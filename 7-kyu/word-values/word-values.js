function wordValue(arr) {
  return arr.map((str, i) => {
    const value = str
      .replace(/\s/g, '')                // remove spaces
      .split('')
      .reduce((sum, ch) => sum + (ch.charCodeAt(0) - 96), 0); // a=1 ... z=26
    return value * (i + 1);              // multiply by position (1-based)
  });
}
​