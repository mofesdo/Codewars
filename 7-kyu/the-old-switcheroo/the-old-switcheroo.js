function vowel2index(str) {
  return str
    .split('')
    .map((char, i) => /[aeiou]/i.test(char) ? i + 1 : char)
    .join('');
}
​