/* Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL

*/

function array(string) {
    let arr = string.split(",");
    let str = "";
    if(arr.length < 3){
      return null;
    }
    else if(arr.length == 3){
      return arr[1];
    }
    else{
      arr = arr.slice(1, arr.length-1);
      arr.forEach((element) => str+=element+" ");
      return str.substring(0, str.length-1);
    }
  }