/*
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.
*/
function SeriesSum(n)
{
  let sum = 1;
  if(n == 1 || n == 0){
    return n + ".00";
  }
  for(let i = 0; i < n -1; i++){
    sum = sum + (1/(4 + (i*3)))
    console.log(sum)
  }
  sum = sum.toFixed(2);
  return sum.toString()
}