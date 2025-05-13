function isOpposite(s1, s2){
  //coding here...
  if(s1.length == 0 || s1 == null || s2.length == 0 || s2 == null || s1.length != s2.length) {return false;}
  
  for(let i = 0; i < s1.length; i++){
    if(s1[i] == s2[i] || s1[i].toLowerCase() != s2[i].toLowerCase()){
      return false;
    }
  }
  return true;
}