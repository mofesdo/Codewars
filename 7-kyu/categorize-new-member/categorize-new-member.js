function openOrSenior(data){
  let res = [];
  data.forEach((member) => {
    if(member[0] >= 55 && member[1] > 7){
      res.push("Senior");
    } else {
      res.push("Open")
    }
  })
  return res;
}