function specialNumber(n) {
  return /^[0-5]+$/.test(String(n)) ? "Special!!" : "NOT!!";
}
​