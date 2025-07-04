function balancedNum(number)
{
 const digits = number.toString().split('').map(Number);
  const len = digits.length;
​
  if (len <= 2) return "Balanced";
​
  let left, right;
​
  if (len % 2 === 1) {
    const mid = Math.floor(len / 2);
    left = digits.slice(0, mid);
    right = digits.slice(mid + 1);
  } else {
    const mid = len / 2;
    left = digits.slice(0, mid - 1);
    right = digits.slice(mid + 1);
  }
​
  const sum = arr => arr.reduce((acc, val) => acc + val, 0);
​
  return sum(left) === sum(right) ? "Balanced" : "Not Balanced";
}