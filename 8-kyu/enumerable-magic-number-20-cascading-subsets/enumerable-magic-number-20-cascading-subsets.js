function eachCons(arr, n) {
  const result = [];
  for (let i = 0; i <= arr.length - n; i++) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
​