function warnTheSheep(queue) {
  console.log(queue);
  if(queue[queue.length - 1] == "wolf"){
    return "Pls go away and stop eating my sheep";
  }
  for(let i = queue.length; i >= 0; i--){
    if(queue[i] == "wolf"){
      return `Oi! Sheep number ${queue.length - 1 - i}! You are about to be eaten by a wolf!`
    }
  }
}