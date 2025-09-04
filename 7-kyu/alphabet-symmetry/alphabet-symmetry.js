function solve(arr){  
 return arr.map(word => {
    return word
      .toLowerCase()
      .split('')
      .filter((ch, i) => ch.charCodeAt(0) - 96 === i + 1).length;
  });
};