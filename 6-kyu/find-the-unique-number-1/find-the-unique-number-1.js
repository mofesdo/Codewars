function findUniq(arr) {
  // do magic
  let nums = [...new Set(arr)];
  if((arr[0] == nums[0] && arr[1] == nums[0]) || (arr[0] == nums[0] && arr[3] == nums[0])){
    return nums[1];
  }
  return nums[0];
}
​