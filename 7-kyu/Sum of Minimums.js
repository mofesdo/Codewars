/* Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values. */
function sumOfMinimums(arr) {
    // your code here
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
      let min = arr[i][0];
      for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
        if(min > arr[i][j]){
          min = arr[i][j]
        }
      }
      sum = sum + min;
    }
    console.log(sum)
    return sum;
  }