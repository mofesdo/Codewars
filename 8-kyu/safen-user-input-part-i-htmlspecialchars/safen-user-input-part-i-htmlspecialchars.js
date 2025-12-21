function htmlspecialchars(str) {
  const map = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;'
  };
​
  return str.replace(/[<>"&]/g, char => map[char]);
}
​