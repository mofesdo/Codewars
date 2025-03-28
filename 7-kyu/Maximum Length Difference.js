/*You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string

*/

function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0){
      return -1;
    }
    
    let a3 = [];
    let a4 = [];
    a1.forEach((i) => a3.push(i.length));
    a3 = a3.sort((a,b) => a-b);
    a2.forEach((i) => a4.push(i.length));
    a4 = a4.sort((a,b) => a-b);
  
    return Math.abs(a3[0] - a4[a4.length-1]) > Math.abs(a3[a3.length-1] - a4[0]) ? Math.abs(a3[0] - a4[a4.length-1]) : Math.abs(a3[a3.length-1] - a4[0]); 
  }