function firstToLast(str, c) {
  const firstIndex = str.indexOf(c);
  const lastIndex = str.lastIndexOf(c);
​
  if (firstIndex === -1) {
    // c not found in str
    return -1;
  } else if (firstIndex === lastIndex) {
    // only one occurrence
    return 0;
  } else {
    // multiple occurrences
    return lastIndex - firstIndex;
  }
}
​