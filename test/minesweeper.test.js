const minesweeper = require('../src/minesweeper');

describe('Given a 3x3 board', () => {
  const boardSize = 3;
  test('when a user hits a mine in the center square the user loses the game', () => {
    expect(minesweeper(boardSize)).toBe('BOOM! – Game Over');
  });
});
