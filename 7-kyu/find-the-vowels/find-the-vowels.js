function vowelIndices(word){
  const vowels = "aeiouy";
  let result = [];
​
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      result.push(i + 1); // +1 for 1-based indexing
    }
  }
​
  return result;
}