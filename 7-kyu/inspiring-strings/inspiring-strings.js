function longestWord(stringOfWords) {
  const words = stringOfWords.split(' ');
  let longest = '';
​
  for (const word of words) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }
​
  return longest;
}
​