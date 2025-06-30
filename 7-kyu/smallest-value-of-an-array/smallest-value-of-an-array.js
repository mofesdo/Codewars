function min(arr, toReturn) { 
  let small = [...arr].sort((a,b) => a-b);
  return toReturn === "value" ? small[0] : arr.indexOf(small[0]);
}