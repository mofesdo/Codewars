function crap(garden, bags, cap) {
  // Check for dog
  for (let row of garden) {
    if (row.includes('D')) return 'Dog!!';
  }
​
  // Count all '@' symbols
  const crapCount = garden.flat().filter(x => x === '@').length;
​
  // If no bags, can’t pick anything up
  if (bags === 0) return 'Cr@p';
​
  // Compare total capacity to total cr@p
  return crapCount <= bags * cap ? 'Clean' : 'Cr@p';
}
​