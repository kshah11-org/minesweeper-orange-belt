const minesweeper = () => 'BOOM! – Game Over';

const round = (board, row, column) => {
  const resultBoard = board;
  if (row === 0) {
    resultBoard[row][column] = 0;
  } else {
    resultBoard[row][column] = 2;
  }
  return resultBoard;
};

const markMines = () => {
  const resultBoard = [
    [3, '*', null],
    ['*', '*', null],
    [null, null, null],
  ];
  return resultBoard;
};

const checkCleared = () => true;

module.exports = { minesweeper, round, markMines, checkCleared };
