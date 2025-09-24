function containAllRots(strng, arr) {
  if (strng === "") return true; // special case
  
  for (let i = 0; i < strng.length; i++) {
    let rotation = strng.slice(i) + strng.slice(0, i);
    if (!arr.includes(rotation)) return false;
  }
  return true;
}
​