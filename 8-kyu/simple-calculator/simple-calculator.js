function calculator(a,b,sign){
 if (typeof a !== "number" || typeof b !== "number") {
    return "unknown value";
  }
​
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : Infinity; // Avoid division by zero if needed
    default:
      return "unknown value";
  }
}