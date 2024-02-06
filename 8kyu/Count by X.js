/* Create a function with two arguments that will return an array of the first n multiples of x.
*/
function countBy(x, n) {
    let z = [];
    for(let i = 0;  i < n; i++){
      z[i] = x * (i+1);
    }
  
    return z;
  }