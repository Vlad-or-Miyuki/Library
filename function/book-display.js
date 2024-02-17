import fs from 'node:fs'; // надо бы скачать
import path from 'path';

export const getbook = (sort) => {
  const bookshelf = JSON.parse(fs.readFileSync(path.resolve("bookshelf.json"))); 
  const existingBooks = bookshelf.filter((book) => book !== null); // массив книжек

  if (sort !== 'no') { // типо тут сортировка по выбранному жанру если есть sort
    for (const book of existingBooks.filter((book) => book[1][1] === sort)) {
      console.log(`книга '${book[0]}' от автора '${book[1][0]}' в жанре ${book[1][1]} и ${book[1][2]} страницей`)
    }
    return "отсортированно по жанру"
  }
  // тут переводим в человеческий вид
  for (const book of existingBooks) {
    console.log(`книга '${book[0]}' от автора '${book[1][0]}' в жанре ${book[1][1]} и ${book[1][2]} страницей`)
  }
  return "все книги на полке"
};

export default getbook