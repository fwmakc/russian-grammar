import { ArrayInterface, loadLocalStorage, saveLocalStorage } from '../../std';

const allowList = [
  'болезнь',
  'отравление',
  'голод',
  'холодно',
  'жарко',
  'хочется спать',
  'ранение',
];

export const status: ArrayInterface = {
  allowList,
  currentList: [],
  maxLength: 3,

  loadCallback: () => loadLocalStorage('player-status'),
  saveCallback: (json: string) => saveLocalStorage('player-status', json),
};
