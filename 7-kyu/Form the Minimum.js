/* Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

Notes:
Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications

minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications


*/
function minValue(values){
    //your code here
    //First remove duplicates with a set
    let nums = new Set(values);
    console.log(nums)
    //convert set back into an array
    let set = Array.from(nums);
    //sort the array
    let sortedSet = set.sort((a, b) => a - b);
    console.log(sortedSet);
    let str = ""
    //create a string to add each number at the end
    for(let i = 0; i < sortedSet.length; i++){
      str = str + sortedSet[i];
    }
    console.log(str);
    //return string as a number
    return Number(str);
  }