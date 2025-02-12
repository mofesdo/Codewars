// Write a function that checks if a given string (case insensitive) is a palindrome.
function isPalindrome(x) {
    // your code here
    for(let i = 0; i < x.length/2; i++){
      if(x[i].toUpperCase() != x[x.length - i - 1].toUpperCase()){
        console.log(x[i])
        console.log(x[x.length - i - 1])
        return false;
      }
    }
    return true;
  }