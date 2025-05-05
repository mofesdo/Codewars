function cubeOdd(arr) {
   if (!arr.every(item => typeof item === 'number')) {
    return undefined;
  }
​
  let odd = arr.filter((num) => num%2 != 0);
  let cubed = [];
  odd.forEach((num) => {
    cubed.push(num**3);
  })
return cubed.reduce((accumulator, current) => accumulator + current, 0);
}