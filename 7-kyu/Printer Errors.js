/* Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
*/
function printerError(s) {
    // your code
  let count = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] >= "n"){
      count++
    }
  }
  console.log(count)
  return `${count}/${s.length}`
  
}