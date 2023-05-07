/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

let boardString =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function solve(boardString) {
  let arr = [];
  const newArr = boardString.split('');
  for (let i = 0; i < newArr.length / 9; i += 1) {
    arr[i] = newArr.slice(i * 9, i * 9 + 9);
    // console.log(newArr);
  }
  console.log(arr);
}
console.log(solve(boardString));
// заполнить 1 массив (квадратик) без повторов
// возвращает массив (метод reduce)
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
for (let i = 0; i < board.length; i += 1) { // горизонталь
  if (board[i].reduce((acc, el) => acc + el, 0) !== 45) return false;
}
for (let i = 0; i < board.length; i += 1) {  // вертикаль
  let colomn = [];
  for (let j = 0; j < board.length; j += 1) {
    colomn.push(board[i][j])
  }
  if (column.reduce((acc, el) => acc + el,0) !== 45) return false;
}
return true;

// 405 сумма всех эл-ов

  // проверка по сумме массиву, горизонтали и вертикали
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  // принимает массив массивов
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
