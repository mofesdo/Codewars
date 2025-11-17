function cutIt(arr) {
  // 1. Find shortest string length
  let minLen = Math.min(...arr.map(str => str.length));
  
  // 2. Cut each string to minLen
  return arr.map(str => str.slice(0, minLen));
}
​