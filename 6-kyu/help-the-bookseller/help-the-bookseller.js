function stockList(books, categories) {
  if(books.length == 0 || categories.length == 0){
    return '';
  }
  let num = /\d+/g;
  let arr = [];
  categories.forEach((category) => arr.push(0));
  books.forEach((book) => {
    let cat = categories.indexOf(book[0]);
    arr[cat] = arr[cat] + Number(book.match(num));
  })
  for(let i = 0; i < arr.length; i++){
    arr[i] = `(${categories[i]} : ${arr[i]})`;
  }
  return arr.join(" - ");
}