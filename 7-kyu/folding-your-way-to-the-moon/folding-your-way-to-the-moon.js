function foldTo(distance) {
  if (distance < 0) return null;  // invalid input
​
  const thickness = 0.0001;       // starting thickness in meters
  let folds = 0;
  let current = thickness;
​
  while (current < distance) {
    current *= 2;                 // each fold doubles thickness
    folds++;
  }
​
  return folds;
}
​