// Write a function that given a floor in the american system returns the floor in the european system.

function getRealFloor(n) {
    if(n > 0 && n < 13){
      return n - 1
    }
    else if( n > 13){
      return n - 2
    }
    else{
      return n
    }
  }