function numberToPower(number, power){
  console.info(Math.log2(1024));
  // Code here
  let result = 1;
  for(let i = 0; i < power; i++){
    result = result * number;
  }
  return result;
}