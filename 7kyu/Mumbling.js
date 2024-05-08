/* This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
function accum(s) {
	// your code
  s = s.toLowerCase();
  let output = ""
  for(let i = 0; i < s.length; i++){
    let nStr = "";
    for(let j = 0; j <= i; j++){
      nStr = nStr + s[i];
    }
    nStr = nStr[0].toUpperCase() + nStr.slice(1);
    if(i == s.length-1){
      output = output + nStr;
    }
    else{
      output = output + nStr + "-"; 
    }
  }
  console.log(output)
  return output;
}