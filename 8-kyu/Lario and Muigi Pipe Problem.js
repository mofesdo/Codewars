/* Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included). */

function pipeFix(numbers){
    let arr = [];
    let last = numbers[numbers.length - 1];
    let first = numbers[0]
    let i = 0;
    while(i < (last - first + 1)){
      arr[i] = first + i
      i++
    }
  return arr;
  }