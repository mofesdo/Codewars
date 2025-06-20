function remove (string) {
  //coding and coding....
  const regex = /!$/
  return regex.test(string) ? string.substring(0, string.length-1) : string;
}