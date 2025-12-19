function productArray(numbers) {
  const totalProduct = numbers.reduce((a, b) => a * b, 1);
  return numbers.map(num => totalProduct / num);
}
​