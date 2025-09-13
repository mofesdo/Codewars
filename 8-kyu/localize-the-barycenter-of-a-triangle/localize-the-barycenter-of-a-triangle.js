function barTriang(p1, p2, p3){
  //your code here
  const xO = (p1[0] + p2[0] + p3[0]) / 3;
  const yO = (p1[1] + p2[1] + p3[1]) / 3;
​
  // round to 4 decimals
  return [Number(xO.toFixed(4)), Number(yO.toFixed(4))];
}