import { ParamInterface } from '../../param.interface';

export interface StackInterface<T> extends ParamInterface {
  currentIndex: number;
  currentList: Array<T>;
  maxLength: number;
}
