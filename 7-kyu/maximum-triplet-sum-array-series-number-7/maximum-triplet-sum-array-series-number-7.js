function maxTriSum(numbers){
  let unique = new Set(numbers);
  let sorted = [...unique].sort((a,b) => b - a);
  return sorted[0] + sorted[1] + sorted[2];
}