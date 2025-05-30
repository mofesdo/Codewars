function isVow(a){
  const vowelMap = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u'
  };
​
  return a.map(num => vowelMap[num] || num);
  
}