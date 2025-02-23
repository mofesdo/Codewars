function count(string) {
  // TODO
  let res = {};
  if(string.length == 0){
    return {};
  }
  for(let i = 0; i < string.length; i++){
    if(string[i] in res){
      res[string[i]] = res[string[i]] + 1;
    }
    else{
      res[string[i]] = 1;
    }
  }
  return res;
}