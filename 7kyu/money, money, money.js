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