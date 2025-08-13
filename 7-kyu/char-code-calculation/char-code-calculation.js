function calc(x){
 if (!x) return 0; // empty -> no digits -> 0
​
  // build the concatenated ASCII codes string
  const total1 = [...x].map(ch => ch.charCodeAt(0)).join('');
​
  // count '7' digits
  const sevens = (total1.match(/7/g) || []).length;
​
  return sevens * 6;
}