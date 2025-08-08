import { SingleInterface } from './single.interface';
import { ParamTemplate } from '../../param.template';

export class SingleParam extends ParamTemplate<SingleInterface> {
  protected allowParameters: Array<string> = ['currentValue'];

  get value(): string {
    return this.params.currentValue;
  }

  set value(userValue: string) {
    const { allowList, currentValue } = this.params;
    if (allowList.length && !allowList.includes(userValue)) {
      return;
    }
    if (currentValue && currentValue === userValue) {
      return;
    }
    this.params.currentValue = userValue;
  }

  reset(): void {
    this.params.currentValue = this.params.defaultValue;
  }
}
