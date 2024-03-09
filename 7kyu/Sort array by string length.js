/* Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/
function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
    for(let i = 0; i < array.length ; i++){
      for(let j = 0; j < array.length ; j++){
        if(array[i].length < array[j].length){
          let temp = array[j];
          array[j] = array[i]
          array[i] = temp;
        }
      }
    }
      return array;
  }