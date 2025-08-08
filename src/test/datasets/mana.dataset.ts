import {
  loadLocalStorage,
  NumericInterface,
  saveLocalStorage,
} from '../../std';

export const mana: NumericInterface = {
  currentValue: 0,
  defaultValue: 0,
  maxValue: 100,
  minValue: 0,

  loadCallback: () => loadLocalStorage('player-mana'),
  saveCallback: (json: string) => saveLocalStorage('player-mana', json),
};
