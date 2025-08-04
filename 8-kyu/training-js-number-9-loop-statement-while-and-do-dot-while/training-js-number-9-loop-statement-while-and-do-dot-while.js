function padIt(str,n){
  let res = str;
  let i = 0;
​
  if (n > 0) {
    do {
      if (i % 2 === 0) {
        res = "*" + res;
      } else {
        res = res + "*";
      }
      i++;
    } while (i < n);
  }
​
  console.log(res);
  return res;
}