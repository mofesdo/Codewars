
function removeSmallest(numbers) {
    let res = numbers;
    if(res == null || res.length == 1){
      return []
    }
    let min = res[0];
    let indexof = "";
    for(let i = 0; i<res.length;i++){
      if(res[i] < min){
        min = res[i];
        indexof = i;
      }
    }
    res.splice(indexof, 1)
    return res;
  }