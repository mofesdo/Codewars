function insertDash(num) {
  let str = String(num);
  let result = "";
​
  for (let i = 0; i < str.length; i++) {
    result += str[i];
​
    // If current digit AND next digit are both odd, add a dash
    if (i < str.length - 1) {
      if (parseInt(str[i]) % 2 === 1 && parseInt(str[i+1]) % 2 === 1) {
        result += "-";
      }
    }
  }
​
  return result;
}
​