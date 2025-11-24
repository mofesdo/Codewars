function solve(s){
    //..
  let cap = 0;
  let low = 0;
  let arr = s.split("");
​
  // Check how many uppercase & lowercase there are in a string
  for(let i = 0; i < arr.length; i++){
    if(arr[i].toLowerCase() == arr[i]){
      low++;
    }
    else{
      cap++
    }
  }
  
  // Return the string in all caps or lowercase depending which has more
  return cap > low ? s.toUpperCase() : s.toLowerCase()
}