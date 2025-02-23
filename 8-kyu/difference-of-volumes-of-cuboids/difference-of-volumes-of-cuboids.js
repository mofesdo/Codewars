function findDifference(a, b) {
  //loading...
  let v1 = 1;
  let v2 = 1;
  a.forEach((num) => v1 = v1 * num);
  b.forEach((num) => v2 = v2 * num);
  
  return Math.abs(v1-v2);
}