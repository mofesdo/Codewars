function squares(x, n) {
  if (n <= 0) return [];
  let result = [x];
  while (result.length < n) {
    result.push(result[result.length - 1] ** 2);
  }
  return result;
}
​