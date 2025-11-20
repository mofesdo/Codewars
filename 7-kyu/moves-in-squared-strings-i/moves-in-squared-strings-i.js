function vertMirror(s) {
  return s
    .split('\n')
    .map(line => line.split('').reverse().join(''))
    .join('\n');
}
​
function horMirror(s) {
  return s
    .split('\n')
    .reverse()
    .join('\n');
}
​
function oper(fct, s) {
  return fct(s);
}
​