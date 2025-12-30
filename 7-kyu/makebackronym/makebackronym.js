function makeBackronym(string) {
  return string
    .toUpperCase()
    .split('')
    .map(letter => dict[letter])
    .join(' ');
}
​