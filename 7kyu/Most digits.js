/* Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array. */

function findLongest(array) {
  const newArr = array.map((x) => x + "");
  let most = newArr[0].length;
  let index = newArr[0];
  newArr.forEach((x) => {
    if (x.length > most) {
      most = x.length;
      index = x;
    }
  });
  console.log(index);
  return Number(index);
}
