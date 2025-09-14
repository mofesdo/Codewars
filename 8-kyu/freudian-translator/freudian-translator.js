function toFreud(string) {
if (typeof string !== 'string' || string.length === 0) return '';
  // Replace every run of non-whitespace characters (a "word") with "sex"
  return string.replace(/\S+/g, 'sex');
}