  if (code === '9') {
    let out = [];
​
    for (let i = 99; i > 0; i--) {
      const bottle = i === 1 ? 'bottle' : 'bottles';
      const next = i - 1;
      const nextBottle = next === 1 ? 'bottle' : 'bottles';
​
      out.push(`${i} ${bottle} of beer on the wall, ${i} ${bottle} of beer.`);
​
      if (i > 1) {
        out.push(`Take one down and pass it around, ${next > 0 ? next : 'no more'} ${nextBottle} of beer on the wall.`);
      } 
​
      if (i === 1) {
        out.push(`Take one down and pass it around, no more bottles of beer on the wall.`);
        out.push(`No more bottles of beer on the wall, no more bottles of beer.`);
        out.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
      }
    }
​
    return out.join('\n');
  }
​
  return undefined; // <-- required by Codewars for "everything else"
}
​
​