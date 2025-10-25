function stringMerge(string1, string2, letter) {
  // Find where the letter first appears in each word
  const index1 = string1.indexOf(letter);
  const index2 = string2.indexOf(letter);
  
  // Combine the part before the letter from string1
  // with the part from and after the letter from string2
  return string1.slice(0, index1) + string2.slice(index2);
}
​