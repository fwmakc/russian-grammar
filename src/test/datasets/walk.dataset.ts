import { loadLocalStorage, saveLocalStorage, SingleInterface } from '../../std';

const allowList = ['север', 'запад', 'юг', 'восток', ''];

export const walk: SingleInterface = {
  allowList,
  currentValue: '',
  defaultValue: '',

  loadCallback: () => loadLocalStorage('player-walk'),
  saveCallback: (json: string) => saveLocalStorage('player-walk', json),
};
