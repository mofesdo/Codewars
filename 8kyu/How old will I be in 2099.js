/* Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
*/
function  calculateAge(birth, year) {
    let age = year - birth;
    if(birth == year){
      return "You were born this very year!"
    }
    if(age == 1){
      return "You are 1 year old."
    }
    if(age == -1){
      return "You will be born in 1 year."
    }
    return age > 0 ? `You are ${year-birth} years old.` : `You will be born in ${Math.abs(year-birth)} years.`
  
  }
  
  