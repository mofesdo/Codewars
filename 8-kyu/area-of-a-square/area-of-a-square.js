function squareArea(A){
  //(Arc Length / π) * (Arc Length / π) * 2
  return Math.round((4 * A ** 2) / (Math.PI ** 2) * 100) / 100;
}