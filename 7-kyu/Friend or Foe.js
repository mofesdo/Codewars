/*Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
*/
function friend(friends){
    //your code here
    let out = []
    for(let i = 0; i < friends.length; i++){
      if(friends[i].length == 4){
        out.push(friends[i])
      }
    }
    return out
  }