//Given a non-empty array of integers, return the result of multiplying the values together in order.
function grow(x){
    let result = 1;
    for(let i = 0; i < x.length; i++){
      result = result * x[i]
    }
    return result;
  }