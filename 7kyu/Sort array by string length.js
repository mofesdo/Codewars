
function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
    for(let i = 0; i < array.length - 1; i++){
            console.log(array)
      if(array[i].length > array[i+1].length){
        let temp = array[i+1];
        array[i+1] = array[i]
        array[i] = temp;
      }
    }
      return array;
  }