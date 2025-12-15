function bandNameGenerator(noun) {
  const first = noun[0];
  const last = noun[noun.length - 1];
​
  if (first === last) {
    // Capitalize first letter, then repeat noun without its first letter
    return noun[0].toUpperCase() + noun.slice(1) + noun.slice(1);
  }
​
  // Otherwise: "The" + capitalized noun
  return "The " + noun[0].toUpperCase() + noun.slice(1);
}