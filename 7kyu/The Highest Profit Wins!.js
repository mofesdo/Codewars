/* Write a function that returns both the minimum and maximum number of the given list/array. */
function minMax(arr){
    let max = arr[0]
    let min = arr[0]
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i]
      }
      if(arr[i] < min){
        min = arr[i]
      }
    }
    return [min, max]; // fix me!
  }