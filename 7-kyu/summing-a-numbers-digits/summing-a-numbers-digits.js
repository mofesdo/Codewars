function sumDigits(number) {
  console.log(number);
// Base Case
    if (number == 0)
        return 0;
    return (Math.abs(number) % 10) + sumDigits(Math.floor(Math.abs(number / 10)));
  }