function automorphic(n){
  const square = n * n;
  return square.toString().endsWith(n.toString()) ? "Automorphic" : "Not!!";
}