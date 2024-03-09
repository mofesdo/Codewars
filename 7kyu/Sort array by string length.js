
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
            console.log(array)
    }
      return array;
  }