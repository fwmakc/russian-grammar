import { ParamInterface } from '../../param.interface';

export interface MapInterface<T> extends ParamInterface {
  allowKeys: Array<string>;
  currentMap: Map<string, T>;
}
