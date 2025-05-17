function validateTime(time) {
  if(time.length > 5 || time.length < 4){
    return false;
  }
  if(time == "24:00"){
    console.log("entered edge case");
    return false;
  }
  res = /[0-2]?[0-9]:[0-5][0-9]/g;
  console.log(time);
  console.log(time.match(res));
  return time.match(res) != null;
}