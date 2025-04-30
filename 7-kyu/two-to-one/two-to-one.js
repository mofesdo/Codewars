function longest(s1, s2) {
  // your code
  let string1 = s1.split('');
  let string2 = s2.split('');
  let result = string1.concat(string2).sort();
  let sorted = [... new Set(result)];
  return sorted.join('');
}