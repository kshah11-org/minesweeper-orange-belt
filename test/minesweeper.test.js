const { minesweeper, round } = require('../src/minesweeper');

describe('Given a 3x3 board', () => {
  const boardSize = 3;
  test('when a user hits a mine in the center square the user loses the game', () => {
    expect(minesweeper(boardSize)).toBe('BOOM! – Game Over');
  });
  test('when a user hits the center square with number 2 the updated board should be returned', () => {
    const emptyBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const resultBoard = [
      [null, null, null],
      [null, 2, null],
      [null, null, null],
    ];
    expect(round(emptyBoard, 1, 1)).toEqual(resultBoard);
  });
  test('when a user hits the top left square with number 0 the updated board should be returned', () => {
    const emptyBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const resultBoard = [
      [0, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(round(emptyBoard, 0, 0)).toEqual(resultBoard);
  });
});
