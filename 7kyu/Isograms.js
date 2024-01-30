/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram(str){
    //...
    if(str.length == 0){
      return true
    }
    for(let i = 0; i < str.length; i++){
      let count = 0;
      for(let j = 0; j < str.length; j++){
        if(str[j].toLowerCase() == str[i].toLowerCase()){
          count++
        }
        if(count > 1){
          return false;
        }
      }
    }