import { loadLocalStorage, MapInterface, saveLocalStorage } from '../../std';

const allowKeys = ['голова', 'тело', 'левая рука', 'правая рука'];
// const allowKeys: never[] = [];

export const body: MapInterface<string> = {
  allowKeys,
  currentMap: new Map(),

  loadCallback: () => loadLocalStorage('player-body'),
  saveCallback: (json: string) => saveLocalStorage('player-body', json),
};
