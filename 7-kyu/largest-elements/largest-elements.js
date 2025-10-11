function largest(n, list) {
  if (n === 0) return [];
  return list
    .sort((a, b) => a - b)
    .slice(-n);
}
​