const {
  minesweeper,
  round,
  markMines,
  checkCleared,
  openNeighbors,
} = require('../src/minesweeper');

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
    const answerBoard = [
      [1, 2, 1],
      ['*', 2, '*'],
      [1, 2, 1],
    ];
    const resultBoard = [
      [null, null, null],
      [null, 2, null],
      [null, null, null],
    ];
    expect(round(emptyBoard, 1, 1, answerBoard)).toEqual(resultBoard);
  });
  test('when a user hits the top left square with number 0 the updated board should be returned', () => {
    const emptyBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const answerBoard = [
      [0, 2, '*'],
      [0, 2, '*'],
      [0, 1, 1],
    ];
    const resultBoard = [
      [0, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(round(emptyBoard, 0, 0, answerBoard)).toEqual(resultBoard);
  });
  test('when a user hits the top left square with number 0 the neighboring squares should be opened', () => {
    const emptyBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const answerBoard = [
      [0, 1, '*'],
      [1, 2, 1],
      ['*', 1, 0],
    ];
    const resultBoard = [
      [0, 1, null],
      [1, 2, null],
      [null, null, null],
    ];
    const board2 = round(emptyBoard, 0, 0, answerBoard);
    expect(openNeighbors(board2)).toEqual(resultBoard);
  });
  test('the marked board should be returned with the mines marked', () => {
    const board = [
      [3, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const resultBoard = [
      [3, '*', null],
      ['*', '*', null],
      [null, null, null],
    ];
    expect(markMines(board)).toEqual(resultBoard);
  });
  test('return true when the board is cleared without hitting a mine', () => {
    const board = [
      [2, 2, 1],
      ['*', '*', 2],
      [3, '*', 2],
    ];
    expect(checkCleared(board)).toEqual(true);
  });
});
