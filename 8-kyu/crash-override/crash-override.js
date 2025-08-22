function aliasGen(first, last){
  if (!first || !last) return "Your name must start with a letter from A - Z.";
​
  const f = first[0].toUpperCase();
  const l = last[0].toUpperCase();
​
  if (!/^[A-Z]$/.test(f) || !/^[A-Z]$/.test(l)) {
    return "Your name must start with a letter from A - Z.";
  }
​
  return `${firstName[f]} ${surname[l]}`;
}