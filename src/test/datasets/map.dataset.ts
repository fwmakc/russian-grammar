import { loadLocalStorage, MatrixInterface, saveLocalStorage } from '../../std';

const matrix = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r'],
  ['s', 't', 'u'],
  ['v', 'w', 'x'],
];

export const map: MatrixInterface = {
  currentCol: 0,
  currentRow: 0,
  defaultCol: 0,
  defaultRow: 0,
  map: matrix,

  loadCallback: () => loadLocalStorage('player-map'),
  saveCallback: (json: string) => saveLocalStorage('player-map', json),
};
