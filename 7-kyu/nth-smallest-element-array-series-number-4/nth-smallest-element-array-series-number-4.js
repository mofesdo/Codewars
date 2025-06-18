function nthSmallest(arr, pos){
  const ordered = [...arr].sort((a,b) => a-b);
  const smallest = ordered[pos-1];
  return smallest;
}