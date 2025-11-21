function dashatize(num) {
  num = Math.abs(num) + "";   // convert to string safely
  let result = "";
​
  for (let i = 0; i < num.length; i++) {
    let digit = num[i];
    let isOdd = digit % 2 === 1;
​
    if (isOdd) {
      // add dash before if not first char AND previous char isn't already a dash
      if (result.length > 0 && result[result.length - 1] !== '-') {
        result += "-";
      }
​
      result += digit;
​
      // add dash after if next digit exists and is not even OR not last digit
      if (i < num.length - 1) {
        result += "-";
      }
    } else {
      result += digit;
    }
  }
​
  // Remove ending dash if it exists
  if (result[result.length - 1] === "-") {
    result = result.slice(0, -1);
  }
​
  return result;
}
​