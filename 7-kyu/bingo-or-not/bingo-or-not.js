function bingo(a) {
  // your winning code here
  console.log(a);
  //B=2, I=9, N=14, G= 7, O=15
  if(a.includes(2) && a.includes(9)&& a.includes(14)&& a.includes(7)&& a.includes(15)){
    return "WIN";
  }
  return "LOSE";
}