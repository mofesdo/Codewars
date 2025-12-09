function compare(s1, s2) {
  function value(str) {
    if (!str) return 0;                 // null → empty
    if (/[^a-zA-Z]/.test(str)) return 0; // non-letters → empty
    return str.toUpperCase()
              .split('')
              .reduce((sum, c) => sum + c.charCodeAt(0), 0);
  }
​
  return value(s1) === value(s2);
}
​