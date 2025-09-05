var SequenceSum = (function() {
  function SequenceSum() {}
​
  SequenceSum.showSequence = function(count) {
    if (count < 0) return count + "<0";   // negative case
    if (count === 0) return "0=0";        // zero case
​
    let result = "";
    let sum = 0;
​
    for (let i = 0; i <= count; i++) {
      sum += i;
      result += i;                        // add the number
      if (i < count) result += "+";       // add + until the last number
    }
​
    return result + " = " + sum;
  };
​
  return SequenceSum;
})();
​