import crc32 from 'crc-32';
import fs from 'node:fs';
import path from 'path';

const getIndex = (key) => Math.abs(crc32.str(key) % 1000);

const setBook = (book, meta) => { // meta это каким-то образом и автор жанр и страницы по индексам
  const bookshelf = JSON.parse(fs.readFileSync(path.resolve("bookshelf.json"))); 
  const index = getIndex(book)

  bookshelf[index] = [book, meta];
  if (meta === 'delite') {
    bookshelf[index] = null;
  }
  const newBook = JSON.stringify(bookshelf);
  fs.writeFileSync(path.resolve("bookshelf.json"), newBook);

  return true
}
export default setBook