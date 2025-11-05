function lastSurvivor(letters, coords) {
  letters = letters.split('');
  for (let i of coords) {
    letters.splice(i, 1);
  }
  return letters[0];
}
​