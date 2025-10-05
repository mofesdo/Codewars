function solve(s) {
  let upper = 0,
      lower = 0,
      nums = 0,
      special = 0;
  
  for (let char of s) {
    if (/[A-Z]/.test(char)) upper++;
    else if (/[a-z]/.test(char)) lower++;
    else if (/[0-9]/.test(char)) nums++;
    else special++;
  }
  
  return [upper, lower, nums, special];
}
​