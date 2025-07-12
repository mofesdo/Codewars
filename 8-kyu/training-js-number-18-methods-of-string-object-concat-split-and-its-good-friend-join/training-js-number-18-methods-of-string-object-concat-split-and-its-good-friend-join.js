function splitAndMerge(string, separator) {
  
  return string.split(" ") // split the sentence into words
    .map(word => word.split("").join(separator)) // split each word into characters and join with separator
    .join(" "); // join the transformed words back into a sentence
 }