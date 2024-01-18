//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
    // Go for it
    let res = ""
    let revStr = ""
    for(let i = str.length - 1; i >= 0; i--){
      res = res + str[i]
    }
    let resArr = res.split(" ");
    console.log(resArr)
    for(let i = resArr.length - 1; i >= 0; i--){
      revStr = revStr + resArr[i]
      if(i != 0){
        revStr = revStr + " "
      }
    }
    
    return revStr
  }