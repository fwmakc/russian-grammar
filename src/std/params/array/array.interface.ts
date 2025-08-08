import { ParamInterface } from '../../param.interface';

export interface ArrayInterface extends ParamInterface {
  allowList: Array<string>;
  currentList: Array<string>;
  maxLength: number;
}
