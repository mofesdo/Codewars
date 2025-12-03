function twoDecimalPlaces(number) {
  const factor = Math.pow(10, 2);
  return Math.trunc(number * factor) / factor;
}