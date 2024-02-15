import { Command } from 'commander';

const program = new Command();

//const a = readFileSync('bookshelf.json')
//const stringa = a.toString('utf8');

program
  .name('Libraly')
  .description('you Libraly with book management capabilities')
  .version('0.1.0');

program.command('book-display')
  .description('The function will represent all the books in the library')
  .option('-s, --sort', 'displays all the books sorted', "no")  // тут можно для флага sort предложить по какому параметру сортировать
  .option('-i, --id <book>', 'display id book')
  .action((options) => {
    if (options.id) {  // РАБОТАТЬ ПОКА НЕ ДОЛЖНО, измени когда будет добавлена функция узнавания айдишника тут возможно будет ломатся 
      return console.log('заглушка айди')
    }
    if (options.sort === 'yes') { 
      return console.log('отсортированные книжки') // отсортированный по жанрам
    }
    return console.log('перечень всех книжек') // вывод без сортировки по жанрам тупо перечень книг
  });

  program.command('book-add')
  .description('add a book to the library')
  .argument('<book>', 'new book')
  .option('-a, --author <author>', 'add an author for the book')  // тут можно для флага sort предложить по какому параметру сортировать
  .option('-g, --genre <genre>', 'add an genre for the book')
  .option('-p, --pages <pages>', 'add an pages for the book')
  .action(() => { // добавляем книжку в библиотеку с нужными параметрами . РАБОТАТЬ ПОКА НЕ ДОЛЖНО, измени когда будет добавлена функция добавления
  console.log('заглушка добавления')
  });

  program.command('book-delite')
  .description('check out a book from the library')
  .argument('<book>', 'erasure book')
  .action(() => { // добавляем книжку в библиотеку с нужными параметрами . РАБОТАТЬ ПОКА НЕ ДОЛЖНО, измени когда будет добавлена функция удаления
    console.log("заглушка удаления")
  });

  program.command('book-modification')
  .description('book modification to the library')
  .argument('<book>', 'book')
  .option('-a, --author <author>', 'mod an author for the book')  // тут можно для флага sort предложить по какому параметру сортировать
  .option('-g, --genre <genre>', 'mod an genre for the book')
  .option('-p, --pages <pages>', 'mod an pages for the book')
  .action(() => { // добавляем книжку в библиотеку с нужными параметрами . РАБОТАТЬ ПОКА НЕ ДОЛЖНО, измени когда будет добавлена функция добавления
    console.log("заглушка")
  });

program.parse();