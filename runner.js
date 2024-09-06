const { read, prettyBoard } = require('./sudoku');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Выберите вариант игры: от 1 до 15 --> ', (gameNumber) => {
  const games = read();

  if (gameNumber > 5) {
    console.log('Ух! А ты рисковый');
  } else if (gameNumber === 15) {
    console.log('Не советую даже начинать');
  }
  prettyBoard(games[gameNumber - 1]);
  readline.close();
});