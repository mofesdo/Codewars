function isPangram(string){
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let alphaArr = alpha.split("");
  let result = true;
  alphaArr.forEach((char) => {
    if(!string.toLowerCase().includes(char)){
      result = false;
    }
  });
  return result;
}