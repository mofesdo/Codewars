function reverseBits(n) {
  // your code here
  console.log(n.toString(2));
  let reversed = n.toString(2).split("").reverse().join("");
  return parseInt(reversed, 2);
}