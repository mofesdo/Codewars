function switcheroo(x){
  //Replace all A's with D as a temp holder, then swap the letters
  x = x.replaceAll("a", "d");
  x = x.replaceAll("b", "a");
  x = x.replaceAll("d", "b");
  return x;
}