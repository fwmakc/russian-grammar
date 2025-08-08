import { ParamInterface } from '../../param.interface';

export interface MatrixInterface extends ParamInterface {
  currentCol: number;
  currentRow: number;
  defaultCol: number;
  defaultRow: number;
  map: Array<Array<string>>;
}
