//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
  //code here
  let num = n + "";
  let result = [];
  let count = 0;
  for(let i = num.length-1; i >= 0; i--){
    result[count] = Number(num[i]);
    count++;
  }
  console.log(result);
  return result;
}