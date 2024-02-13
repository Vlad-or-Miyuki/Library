import crc32 from 'crc-32';

const getIndex = (book) => Math.abs(crc32.str(key)) % 1000;

const set = (map, book, value) => {
    const index = getIndex(key);
    if (map[index] && hasCollision(map, key)) {
      return false;
    }
    map[index] = [key, value];
  
    return true;
  };