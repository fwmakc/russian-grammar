import { NumericInterface } from './numeric.interface';
import { ParamTemplate } from '../../param.template';

export class NumericParam extends ParamTemplate<NumericInterface> {
  protected allowParameters: Array<string> = ['currentValue', 'maxValue'];

  get max(): number {
    return this.params.maxValue;
  }

  set max(userValue: number) {
    this.params.maxValue = userValue;
    const { currentValue, maxValue } = this.params;
    if (currentValue > maxValue) {
      this.params.currentValue = maxValue;
    }
  }

  get value(): number {
    return this.params.currentValue;
  }

  set value(userValue: number) {
    const { minValue, maxValue } = this.params;
    if (userValue < minValue) {
      userValue = minValue;
    }
    if (userValue > maxValue) {
      userValue = maxValue;
    }
    this.params.currentValue = userValue;
  }

  reset(): void {
    this.params.currentValue = this.params.defaultValue;
  }
}
