function sevenAte9(str) {
  console.log(str);
  let string = str.split("");
  console.log(string);
  for(let i = 0; i <= string.length; i++){
    if(string[i] == "9" && string[i-1] == "7" && string[i+1] == "7"){
      string[i] = "";
    }
  }
  return string.join("");
}