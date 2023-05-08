/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const board = [];
  const newArr = boardString.split('');
  for (let i = 0; i < newArr.length / 9; i += 1) {
    board[i] = newArr.slice(i * 9, i * 9 + 9);
    // console.log(newArr);
  }

  // размер поля
  const size = 9;

  // нужна для проверки 3:3
  const boxSize = 3;

  // поиск пустых элементов

  const emptyStr = () => {
    for (let row = 0; row < size; row += 1) {
      for (let column = 0; column < size; column += 1) {
        if (board[row][column] === '-') {
          return [row, column];
        }
      }
    }
    return null;
  };

  // проверка по вертикали и горизонтали
  const checkNum = (num, pos) => {
    const [r, c] = pos;

    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // проверка 3:3

    // const boxRow = Math.floor(r / boxSize) * boxSize;
    // const boxCol = Math.floor(c / boxSize) * boxSize;

    // for (let i = boxRow; i < boxRow + boxSize; i += 1) {
    //   for (let j = boxCol; j < boxCol + boxSize; j += 1) {
    //     if (board[i][j] === num && i !== r && j !== c) {
    //       return false;
    //     }
    //   }
    // }

    return true;
  };

  // рекурсия, при выполнении всех проверок заполняет пустые строки

  const decision = () => {
    const currPos = emptyStr(board);

    if (currPos == null) {
      return true;
    }

    for (let i = 1; i <= size; i += 1) {
      const number = i.toString();
      const ischeckNum = checkNum(number, currPos, board);
      if (ischeckNum) {
        const [x, y] = currPos;
        board[x][y] = number;

        if (decision()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  };
  // console.log(arr);
  decision();
  return board;
}
// console.log(solve(boardString));
// заполнить 1 массив (квадратик) без повторов
// возвращает массив (метод reduce)
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

// const board = [
//   ["1", "4", "5", "8", "9", "2", "6", "7", "3"],
//   ["8", "9", "3", "1", "7", "6", "4", "2", "5"],
//   ["2", "7", "6", "4", "3", "5", "8", "1", "9"],
//   ["5", "1", "9", "2", "4", "7", "3", "8", "6"],
//   ["7", "6", "2", "5", "8", "3", "1", "9", "4"],
//   ["3", "8", "4", "9", "6", "1", "7", "5", "2"],
//   ["9", "5", "7", "6", "1", "4", "2", "3", "8"],
//   ["4", "3", "8", "7", "2", "9", "5", "6", "1"],
//   ["6", "2", "1", "3", "5", "8", "9", "4", "7"],
// ];

function isSolved(board) {
  for (let i = 0; i < board.length; i += 1) {
    // горизонталь
    if (board[i].reduce((acc, el) => acc + +el, 0) !== 45) return false;
  }
  for (let i = 0; i < board.length; i += 1) {
    // вертикаль
    let column = [];
    for (let j = 0; j < board.length; j += 1) {
      column.push(board[i][j]);
    }
    if (column.reduce((acc, el) => acc + +el, 0) !== 45) return false;
  }
  // Сумма цифр всей доски
  const string = board
    .map((line) => {
      return line.join('');
    })
    .join('');
  const ddd = string.split('').reduce((acc, el) => acc + +el, 0);
  if (ddd !== 405) return false;

  return true;
}

function stringToArray(boardString) {
  const reg = /.{9}/g;
  return boardString.match(reg).map((line) => {
    return line.split('');
  });
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  // принимает массив массивов
  board.forEach((el) => {
    el.splice(0, 0, '|');
    el.splice(10, 0, '|');
    el.splice(4, 0, '|');
    el.splice(8, 0, '|');
    //  console.log(el);
  });
  // console.log(board);
  for (let k = 2; k < board.length - 3; k += 3) {
    board[k].push(
      '\n',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—',
      '—'
    );
    // console.log(board);
  }
  board.unshift([' ', '—', '—', '—', '—', '—', '—', '—', '—', '—', '—', '—']);
  board.push([' ', '—', '—', '—', '—', '—', '—', '—', '—', '—', '—', '—']);
  // let tabl = str.map((el) => el.join(" "));
  const tabl = board.map((el) => el.join(' '));
  // console.log(tabl.join("\n"));
  return tabl.join('\n');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
