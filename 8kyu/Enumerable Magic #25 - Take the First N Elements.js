/* Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/
function take(arr, n) {
    // Your code here
    if(arr.length == 0){
      return [];
    }
    let ans = [];
    for(let i = 0; i < n; i++){
      if(i > arr.length - 1){
        return ans;
      }
      ans[i] = arr[i]
    }
    return ans;
  }