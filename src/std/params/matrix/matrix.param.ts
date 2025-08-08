import { MatrixInterface } from './matrix.interface';
import { ParamTemplate } from '../../param.template';

export class MatrixParam extends ParamTemplate<MatrixInterface> {
  protected allowParameters: Array<string> = [
    'currentCol',
    'currentRow',
    'map',
  ];

  get col(): number {
    return this.params.currentCol;
  }

  set col(userValue: number) {
    if (userValue < 0) {
      this.params.currentCol = 0;
      return;
    }
    if (userValue >= this.params.map[this.params.currentRow].length - 1) {
      this.params.currentCol =
        this.params.map[this.params.currentRow].length - 1;
      return;
    }
    this.params.currentCol = userValue;
  }

  get row(): number {
    return this.params.currentRow;
  }

  set row(userValue: number) {
    if (userValue < 0) {
      this.params.currentRow = 0;
      return;
    }
    if (userValue >= this.params.map.length - 1) {
      this.params.currentRow = this.params.map.length - 1;
      return;
    }
    this.params.currentRow = userValue;
  }

  get value(): string {
    return this.params.map[this.params.currentRow][this.params.currentCol];
  }

  set value(userValue: string) {
    this.params.map[this.params.currentRow][this.params.currentCol] = userValue;
  }

  maxRow(): number {
    return this.params.map.length - 1;
  }

  maxCol(): number {
    return this.params.map[this.params.currentRow].length - 1;
  }

  findValueByCoords(col: number, row: number): string {
    return this.params.map[row][col];
  }

  findCoordsByValue(userValue: string): {
    col: number | null;
    row: number | null;
  } {
    for (const rowIndex in this.params.map) {
      const row = this.params.map[rowIndex];
      for (const colIndex in row) {
        const col = row[colIndex];
        if (col === userValue) {
          return { col: +colIndex, row: +rowIndex };
        }
      }
    }
    return { col: null, row: null };
  }

  reset(): void {
    this.params.currentCol = this.params.defaultCol;
    this.params.currentRow = this.params.defaultRow;
  }
}
