function twoSort(s) {
 // Step 1: Sort the array
  let first = s.sort()[0];
  
  // Step 2: Add "***" between characters
  return first.split("").join("***");
}