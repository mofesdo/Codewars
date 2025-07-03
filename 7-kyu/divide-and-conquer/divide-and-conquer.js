function divCon(x){
  let string = 0;
  let digit = 0;
  x.forEach((ele) => {
    typeof ele === "number" ? digit = digit + ele : string = string + Number(ele);
  });
  return digit - string;
}