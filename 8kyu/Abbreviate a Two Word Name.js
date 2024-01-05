// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
function abbrevName(name){

    // code away
  let abbrev = ""
  abbrev = name[0].toUpperCase() + "."
  for(let i = 0; i < name.length; i++){
    if(name[i] == " "){
      abbrev = abbrev + name[i+1].toUpperCase()
    }
  }
return abbrev
}