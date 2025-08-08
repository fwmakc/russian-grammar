import {
  loadLocalStorage,
  NumericInterface,
  saveLocalStorage,
} from '../../std';

export const health: NumericInterface = {
  currentValue: 50,
  defaultValue: 50,
  maxValue: 100,
  minValue: 0,

  loadCallback: () => loadLocalStorage('player-health'),
  saveCallback: (json: string) => saveLocalStorage('player-health', json),
};
