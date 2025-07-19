function solve(arr) {
  let filtered = [];
  arr.forEach((num) => {
    if(filtered.includes(num)){
      const index = filtered.indexOf(num);
      if (index > -1) { // only splice array when item is found
        filtered.splice(index, 1); // 2nd parameter means remove one item only
      }
      filtered.push(num);
    } else{
      filtered.push(num);
    }
  });
  return filtered;
}