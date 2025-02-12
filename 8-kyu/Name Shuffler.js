//Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    //Shuffle It
    let shuffle = str.split(" ");
    console.log(shuffle)
    return shuffle[1] + " " + shuffle[0]
  }