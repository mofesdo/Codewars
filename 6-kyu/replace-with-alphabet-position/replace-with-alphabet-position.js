function alphabetPosition(text) {
  //Get rid of all non alphabet values and then lowercase
  text = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
  let result = [];
  //Iterate through each value and convert it into charCode and push it into result array
  for(let i = 0; i < text.length; i++){
    result.push(text[i].charCodeAt(0) - 96);
  }
  //Return array with a space in between each index.
  return result.join(" ");
}