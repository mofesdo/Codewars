function stringClean(s){
  // Function will return the cleaned string
  let regex = /\d/gi;
  return s.replaceAll(regex, "");
}