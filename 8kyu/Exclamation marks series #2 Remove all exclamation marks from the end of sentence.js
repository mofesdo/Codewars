/*Description:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi" */
function remove(string) {
    let str = string;
    while(str[str.length-1] == "!"){
      str = str.substring(0, str.length - 1);
    }
    return str;
  }