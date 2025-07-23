function highestRank(arr){
  const freqMap = {};
  
  // Count frequencies
  for (const num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }
​
  let maxFreq = 0;
  let result = -Infinity;
​
  // Find the most frequent (and largest if tie)
  for (const num in freqMap) {
    const frequency = freqMap[num];
    const number = parseInt(num);
    
    if (
      frequency > maxFreq ||
      (frequency === maxFreq && number > result)
    ) {
      maxFreq = frequency;
      result = number;
    }
  }
  return result;
}