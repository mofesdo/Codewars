/* Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with a lower index. 
If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/
function removeSmallest(numbers) {
    let res = [];
    for(let i = 0; i<numbers.length;i++){
      res[i] = numbers[i]
    }
    
    if(res == null || res.length == 1){
      return []
    }
    let min = res[0];
    let indexof = "";
    for(let i = 0; i<res.length;i++){
      if(res[i] < min){
        min = res[i];
        indexof = i;
      }
    }
    res.splice(indexof, 1)
    console.log(res)
    console.log(numbers)
    return res;
  }