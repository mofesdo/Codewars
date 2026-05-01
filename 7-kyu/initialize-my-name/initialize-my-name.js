function initializeNames(name){
  let fullName = name.split(" ");
  if(fullName.length < 2){
    return name;
  }
  for(let i = 1; i < fullName.length-1; i++){
    fullName[i] = fullName[i][0] + ".";
  }
  return fullName.join(" ");
}