function gimme (triplet) {
  let sorted = [...triplet];
  sorted.sort((a,b) => a -b);
  return triplet.indexOf(sorted[1]);
}