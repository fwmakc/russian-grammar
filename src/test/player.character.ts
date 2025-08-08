import {
  ArrayParam,
  MapParam,
  MatrixParam,
  NumericParam,
  SingleParam,
} from '../std';

import { body } from './datasets/body.dataset';
import { health } from './datasets/health.dataset';
import { mana } from './datasets/mana.dataset';
import { map } from './datasets/map.dataset';
import { status } from './datasets/status.dataset';
import { walk } from './datasets/walk.dataset';

export class PlayerCharacter {
  body: MapParam<string>;
  health: NumericParam;
  mana: NumericParam;
  status: ArrayParam;
  walk: SingleParam;
  map: MatrixParam;

  constructor() {
    this.body = new MapParam<string>(body);
    this.body.load();

    this.health = new NumericParam(health);
    this.health.load();

    this.mana = new NumericParam(mana);
    this.mana.load();

    this.map = new MatrixParam(map);
    this.map.load();

    this.status = new ArrayParam(status);
    this.status.load();

    this.walk = new SingleParam(walk);
    this.walk.load();
  }
}
