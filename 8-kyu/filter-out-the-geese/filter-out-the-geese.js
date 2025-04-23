function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  // return an array containing all of the strings in the input array except those that match strings in geese
  const result = birds.filter((bird) => geese.includes(bird) != true);
  console.log(result);
  return result;
};