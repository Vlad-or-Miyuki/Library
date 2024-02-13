import crc32 from 'crc-32';

const getIndex = (book) => Math.abs(crc32.str(key)) % 1000;

const hasCollision = (bookshelf, book) => {
  const index = getIndex(book)
  const [currentKey] = map[index]
  return currentKey !== book
}

const setF = (bookshelf, book, value) => {
    const index = getIndex(book);
    if (bookshelf[index] && hasCollision(bookshelf, book)) {
      return false;
    }
    bookshelf[index] = [book, value];
  
    return true;
  };

export default setF;