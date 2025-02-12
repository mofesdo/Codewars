/* Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
*/
function doubleChar(str) {
    // Your code here
    let double = "";
    for(let i = 0; i < str.length; i++){
      double = double + str[i] + str[i]
    }
    return double;
  }
  