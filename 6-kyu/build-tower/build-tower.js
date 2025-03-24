function towerBuilder(nFloors) {
  // build here
  let space, star, tower = [];
  
  for(let i = 1; i <=nFloors; i++){
    space = ' '.repeat(nFloors - i);
    star = '*'.repeat(2 * i - 1);
    tower.push(`${space}${star}${space}`);
  }
  console.log(tower);
  return tower;
}