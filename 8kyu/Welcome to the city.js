/* Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
*/
function sayHello( name, city, state ) {
    let person = "";
    for(let i = 0; i < name.length; i++){
      if(i == name.length-1){
        person = person + name[i]
      }
      else{
        person = person + name[i] + " "
      }
    }
    return `Hello, `+person+`! Welcome to ${city}, ${state}!`
  }