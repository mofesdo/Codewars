//Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
function addLength(str) {
    //start-here
      let arrLength = str.split(' ')
      for(let i = 0; i < arrLength.length; i++){
        arrLength[i] = arrLength[i] + " " + arrLength[i].length;
      }
      console.log(arrLength)
      return arrLength;
    }