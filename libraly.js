import { Command } from 'commander';
const program = new Command();

import setBook from './function/add-books-delite.js';
import getbook from './function/book-display.js';

program
  .name('Libraly')
  .description('you Libraly with book management capabilities')
  .version('0.1.0');

program.command('book-display')
  .description('The function will represent all the books in the library')
  .option('-s, --sort <sort>', 'displays all the books sorted', "no")  // тут можно для флага sort предложить по какому параметру сортировать.
  .action((options) => {
    console.log(getbook(options.sort)); // если есть флаг -s то сортировка идет по одному жанру,если нет то высвечивается всё.
  });

  program.command('book-add')
  .description('add a book to the library')
  .argument('<book>', 'new book')
  .option('-a, --author <author>', 'add an author for the book')  // тут можно для флага sort предложить по какому параметру сортировать.
  .option('-g, --genre <genre>', 'add an genre for the book')
  .option('-p, --pages <pages>', 'add an pages for the book')
  .action((book, options) => { // добавляем книжку в библиотеку с нужными параметрами.
  console.log(setBook(book,[options.author,options.genre,Number(options.pages)]));
  });

  program.command('book-delite')
  .description('check out a book from the library')
  .argument('<book>', 'erasure book')
  .action((book) => { // удаляем книгу.
    console.log(setBook(book,'delite'));
  });

program.parse();