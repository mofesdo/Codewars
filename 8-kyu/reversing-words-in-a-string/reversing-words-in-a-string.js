function reverse(string){
  let arr = string.split(" ");
  let result = [];
  for(let i = arr.length-1; i >= 0; i--){
    result.push(arr[i]);
  }
  return result.join(" ");
}