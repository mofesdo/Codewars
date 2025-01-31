/* Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer. */

function isSortedAndHow(array) {
    let arr = JSON.stringify(array);
    let asc = JSON.stringify(array.sort((a,b)=> a-b));
    let des = JSON.stringify(array.sort((a,b)=> b-a));
    if(arr === asc){
      return "yes, ascending";
    }
    else if(arr === des){
      return "yes, descending";
    }
    else{
      return "no";
    }
  }