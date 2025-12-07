function calculate(str) {
  return String(
    eval(str.replace(/plus/g, "+").replace(/minus/g, "-"))
  );
}
​