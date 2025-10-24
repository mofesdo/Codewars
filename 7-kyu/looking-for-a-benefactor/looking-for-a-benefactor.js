function newAvg(arr, newAvg) {
  const total = arr.reduce((a, b) => a + b, 0);
  const x = Math.ceil(newAvg * (arr.length + 1) - total);
  if (x <= 0) throw new Error("Expected New Average is too low");
  return x;
}
​