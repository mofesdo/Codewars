function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) return [];
​
  return bagOfFruits.map(fruit => {
    if (fruit.startsWith("rotten")) {
      return fruit.slice(6).toLowerCase(); // remove "rotten"
    }
    return fruit.toLowerCase();
  });
}