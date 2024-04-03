function solution(nums){
    console.log(nums)
    if(nums == null){
      return []
    }
    return nums.sort((a, b) => a - b);
  }