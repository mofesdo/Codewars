function integrate(coefficient, exponent) {
  let newExponent = exponent + 1;
  let newCoefficient = coefficient / newExponent;
  return `${newCoefficient}x^${newExponent}`;
}
​