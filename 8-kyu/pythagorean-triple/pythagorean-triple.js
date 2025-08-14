function isPythagoreanTriple(integers) {
  // Good luck friends!
  let sorted = [...integers].sort((a,b) => a-b);
  return ((sorted[0] * sorted[0]) + (sorted[1] * sorted[1])) == (sorted[2] * sorted[2]);
}