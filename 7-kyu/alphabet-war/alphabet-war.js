function alphabetWar(fight)
{
  console.log(fight);
  let left = 0;
  let right = 0;
  for(let i = 0; i <= fight.length; i++){
    if(fight[i] == "s") {left += 1}
    if(fight[i] == "b") {left += 2}
    if(fight[i] == "p") {left += 3}
    if(fight[i] == "w") {left += 4}
    
    if(fight[i] == "z") {right += 1}
    if(fight[i] == "d") {right += 2}
    if(fight[i] == "q") {right += 3}
    if(fight[i] == "m") {right += 4}
  }
  console.log(left)
  console.log(right)
  if(left > right) {return "Left side wins!"}
  if(right > left) {return "Right side wins!"}
  return "Let's fight again!";
}