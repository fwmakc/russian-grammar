/*
import { main } from './main';
import { loop } from 'lib-curses';

loop(main, 1000);
*/

import { PlayerCharacter } from './test/player.character';

console.log('+++');

const player: PlayerCharacter = new PlayerCharacter();

player.health.value += 1;
player.health.save();

const body = player.body.get();
player.body.insert('голова', 'шлем');
player.body.insert('голова', 'шлем2');
player.body.insert('левая рука', 'шлем3');
// player.body.remove('голова');
console.log('player.body', body);

const includes = player.body.includes('голова');
console.log('includes', includes);

const find = player.body.find('голова');
console.log('find', find);

const r: { [key: string]: any } = {};
player.body.forEach((value, key) => {
  r[key] = value;
});
console.log('-- r', r);

/*
  player.health.reset();
  player.health.max += 1;
  player.health.value += 10;

  console.log('player.map', player.map);
  console.log({ value: player.map.value });
  player.map.col -= 1;
  player.map.row -= 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });
  player.map.col += 1;
  player.map.row += 3;
  console.log({ value: player.map.value });

  player.map.value = 'n';
  console.log({ value: player.map.value });
  console.log({ map: player.map });
  player.map.col -= 2;
  player.map.row += 2;
  console.log({ value: player.map.value });
  console.log({ map: player.map });

  const a = player.map.findValueByCoords(1, 2);
  console.log('findValueByCoords(1, 2)', a);
  const b = player.map.findCoordsByValue('n');
  console.log('findCoordsByValue(n)', b);

  console.log('голод', player.status.insert('голод'));
  console.log('озноб', player.status.insert('озноб'));
  console.log('холодно', player.status.insert('холодно'));
  console.log('жарко', player.status.insert('жарко'));
  console.log('голод', player.status.remove('голод'));
  console.log('хочется спать', player.status.insert('хочется спать'));
  player.status.save();
  console.log(player.status.get());

  console.log(':', player.walk.value);
  player.walk.value = 'влево';
  console.log('влево', player.walk.value);
  player.walk.value = 'запад';
  console.log('запад', player.walk.value);
  player.walk.value = 'восток';
  console.log('восток', player.walk.value);
  player.walk.value = 'юг';
  console.log('юг', player.walk.value);
  player.walk.value = 'вверх';
  console.log('вверх', player.walk.value);
  player.walk.value = 'север';
  console.log('север', player.walk.value);
  player.walk.save();
  */
