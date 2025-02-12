/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/
function position(letter){
    //Write your own Code!
      let string = "abcdefghijklmnopqrstuvwxyz";
      for(let i = 0; i<string.length; i++){
        if(letter == string[i]){
          return "Position of alphabet: "+(i+1);
        }
      }
    }