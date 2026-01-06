function hydrate(drinkString) {
  const totalDrinks = drinkString
    .match(/\d+/g)
    .reduce((sum, num) => sum + Number(num), 0);
​
  return totalDrinks === 1
    ? "1 glass of water"
    : `${totalDrinks} glasses of water`;
}
​