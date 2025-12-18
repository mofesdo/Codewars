function lostSheep(friday, saturday, total) {
  const fridaySum = friday.reduce((a, b) => a + b, 0);
  const saturdaySum = saturday.reduce((a, b) => a + b, 0);
  return total - (fridaySum + saturdaySum);
}
​