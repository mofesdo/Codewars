/* Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
*/
function getGrade (s1, s2, s3) {
    // Code here
    let avg = (s1 + s2 + s3)/3
    if(avg >= 90){
      return "A"
    }
    if(avg >= 80){
      return "B"
    }
    if(avg >= 70){
      return "C"
    }
    if(avg >= 60){
      return "D"
    }
    else{
      return "F"
    }
  }