//Write a function which calculates the average of the numbers in a given list.
function findAverage(array) {
    // your code here
    if(array.length == 0){
      return 0
    }
    let avg = 0;
    for(let i = 0; i < array.length; i++){
      avg = avg + array[i]
    }
    
    return avg/array.length
  }