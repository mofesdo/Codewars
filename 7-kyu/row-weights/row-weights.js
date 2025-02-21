function rowWeights(array){
  //your code here
  let team1 = [];
  let team2 = [];
  let weight1 = 0;
  let weight2 = 0;
  for(let i = 0; i < array.length; i++){
    if(i%2 == 0){
      team1.push(array[i]);
    }
    else{
      team2.push(array[i]);
    }
  }
  team1.forEach((weight) => weight1 = weight1 + weight);
  team2.forEach((weight) => weight2 = weight2 + weight);
  return [weight1, weight2];
}