function generateShape(integer){
  let result = ""
  for(let i = 0; i < integer; i++){
    for(let j = 0; j < integer; j++){
      result = result + "+"
    }
    result = result + "\n";
  }
  return result.substring(0, result.length-1);
}