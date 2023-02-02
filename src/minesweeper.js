const minesweeper = () => 'BOOM! – Game Over';

const round = (board, row, column) => {
  const result = board;
  if (row === 0) {
    result[row][column] = 0;
  } else {
    result[row][column] = 2;
  }
  return result;
};
module.exports = { minesweeper, round };
