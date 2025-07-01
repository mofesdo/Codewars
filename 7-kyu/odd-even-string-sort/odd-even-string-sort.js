function sortMyString(S) {
    // your code here
  let odd = [];
  let even = [];
  for(let i = 0; i < S.length; i++){
    i % 2 == 0 ? odd.push(S[i]) : even.push(S[i]);
  }
    return odd.join("") + " " + even.join("");
}