reverse = function(array) {
  // TODO: program me!
  let result = []
  for(let i = array.length-1; i >= 0; i--){
    result.push(array[i])
  }
  return result;
}