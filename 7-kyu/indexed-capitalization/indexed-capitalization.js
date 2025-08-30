function capitalize(string, indices) {
     return string
    .split('')
    .map((char, i) => indices.includes(i) ? char.toUpperCase() : char)
    .join('');
}