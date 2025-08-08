import { ArrayInterface } from './array.interface';
import { ParamTemplate } from '../../param.template';

export class ArrayParam extends ParamTemplate<ArrayInterface> {
  protected allowParameters: Array<string> = ['currentList', 'maxLength'];

  get max(): number {
    return this.params.maxLength;
  }

  set max(userValue: number) {
    this.params.maxLength = userValue;
  }

  get(): Array<string> {
    return this.params.currentList;
  }

  includes(userValue: string): boolean {
    return this.params.currentList.includes(userValue);
  }

  insert(userValue: string): boolean {
    const { allowList, currentList, maxLength } = this.params;
    if (maxLength && currentList.length >= maxLength) {
      return false;
    }
    if (allowList.length && !allowList.includes(userValue)) {
      return false;
    }
    if (currentList.length && currentList.includes(userValue)) {
      return false;
    }
    this.params.currentList.push(userValue);
    return true;
  }

  remove(userValue: string): boolean {
    const { allowList, currentList } = this.params;
    if (!currentList.length || !currentList.includes(userValue)) {
      return false;
    }
    if (allowList.length && !allowList.includes(userValue)) {
      return false;
    }
    this.params.currentList = currentList.filter((item) => item !== userValue);
    return true;
  }

  clear(): void {
    this.params.currentList = [];
  }
}
