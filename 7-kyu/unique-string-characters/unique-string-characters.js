function solve(a, b) {
  return [...a, ...b]
    .filter(ch => !a.includes(ch) || !b.includes(ch))
    .join('');
}
​