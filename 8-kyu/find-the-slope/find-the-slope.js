function slope(points) {
  const [a, b, c, d] = points;
  const dx = c - a;
  const dy = d - b;
​
  if (dx === 0) return "undefined";
  return String(dy / dx);
}
​