function unluckyDays(year) {
  let count = 0;
  for (let m = 0; m < 12; m++) {
    // JS Date: months 0-11, getDay(): Sunday=0 ... Friday=5
    if (new Date(year, m, 13).getDay() === 5) count++;
  }
  return count;
}
​
// Examples
console.log(unluckyDays(2015)); // 3
console.log(unluckyDays(1986)); // 1
​