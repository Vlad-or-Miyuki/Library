import { Command } from 'commander';
const program = new Command();

import setBook from './function/add-books-delite.js';
import getbook from './function/book-display.js';

//const a = readFileSync('bookshelf.json')
//const stringa = a.toString('utf8');

program
  .name('Libraly')
  .description('you Libraly with book management capabilities')
  .version('0.1.0');

program.command('book-display')
  .description('The function will represent all the books in the library')
  .option('-s, --sort <sort>', 'displays all the books sorted', "no")  // тут можно для флага sort предложить по какому параметру сортировать
  .action((options) => {
    console.log(getbook(options.sort)) // вывод без сортировки по жанрам тупо перечень книг
  });

  program.command('book-add')
  .description('add a book to the library')
  .argument('<book>', 'new book')
  .option('-a, --author <author>', 'add an author for the book')  // тут можно для флага sort предложить по какому параметру сортировать
  .option('-g, --genre <genre>', 'add an genre for the book')
  .option('-p, --pages <pages>', 'add an pages for the book')
  .action((book, options) => { // добавляем книжку в библиотеку с нужными параметрами . РАБОТАТЬ ПОКА НЕ ДОЛЖНО, измени когда будет добавлена функция добавления
  console.log(setBook(book,[options.author,options.genre,Number(options.pages)]))
  });

  program.command('book-delite')
  .description('check out a book from the library')
  .argument('<book>', 'erasure book')
  .action((book) => { // добавляем книжку в библиотеку с нужными параметрами . РАБОТАТЬ ПОКА НЕ ДОЛЖНО, измени когда будет добавлена функция удаления
    console.log(setBook(book,'delite'))
  });

program.parse();