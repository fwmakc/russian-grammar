import { ParamInterface } from '../../param.interface';

export interface NumericInterface extends ParamInterface {
  currentValue: number;
  defaultValue: number;
  maxValue: number;
  minValue: number;
}
