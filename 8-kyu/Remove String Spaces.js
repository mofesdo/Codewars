// Write a function that removes the spaces from the string, then return the resultant string
function noSpace(x){
    let result = ""
    for(let i = 0; i < x.length; i++){
      if(x[i] != " "){
        result = result + x[i]
      }
    }
    return result;
  }