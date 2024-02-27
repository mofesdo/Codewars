/* Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
*/
function points(games) {
    let sum = 0
    for(let i = 0; i < games.length; i++){
      console.log(games[i][0])
      if(Number(games[i][0]) > Number(games[i][2])){
        sum = sum + 3;
      }
      else if(Number(games[i][0]) == Number(games[i][2])){
        sum = sum + 1;
      }
    }
    console.log(sum)
    return sum
  }