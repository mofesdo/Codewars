/* The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:
*/
function calculateYears(principal, interest, tax, desired) {
    // your code
  let count = 0;
  let accrued = 0;
  while(principal < desired){
    principal = principal + ((principal * interest)-(principal * interest * tax));
    count++;
    console.log(principal)
  }
  return count;
}