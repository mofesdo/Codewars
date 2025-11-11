function encode(str, n) {
  const keyDigits = String(n).split('').map(Number);
  const letters = str.split('').map(ch => ch.charCodeAt(0) - 96);
  
  return letters.map((num, i) => num + keyDigits[i % keyDigits.length]);
}
​