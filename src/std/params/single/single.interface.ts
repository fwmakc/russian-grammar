import { ParamInterface } from '../../param.interface';

export interface SingleInterface extends ParamInterface {
  allowList: Array<string>;
  currentValue: string;
  defaultValue: string;
}
