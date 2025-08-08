import { StackInterface } from './stack.interface';
import { ParamTemplate } from '../../param.template';

export class StackParam<T> extends ParamTemplate<StackInterface<T>> {
  protected allowParameters: Array<string> = ['currentList'];

  get index(): number {
    return this.params.currentIndex;
  }

  set index(userInput: number) {
    if (userInput < -this.params.currentList.length) {
      userInput = -this.params.currentList.length;
    }
    if (userInput >= this.params.currentList.length - 1) {
      userInput = this.params.currentList.length - 1;
    }
    this.params.currentIndex = userInput;
  }

  get value(): Array<T> {
    return this.params.currentList;
  }

  set value(userInput: Array<T>) {
    this.params.currentList = userInput;
  }

  // возвращает первый элемент со дна стека и далее вверх с увеличением индекса
  at(index = 0): T | null {
    return this.params.currentList.at(index) || null;
  }

  length(): number {
    return this.params.currentList.length;
  }

  // возвращает последний добавленный элемент стека и далее вниз с увеличением индекса
  peek(index = 0): T | null {
    index = index * -1 - 1;
    return this.at(index);
  }

  // добавляет элемент в стек
  push(userValue: T): T | null {
    let firstValue: T | null = null;
    const { currentList, maxLength } = this.params;
    if (maxLength && currentList.length >= maxLength) {
      firstValue = this.params.currentList.shift() || null;
    }
    this.params.currentList.push(userValue);
    return firstValue;
  }

  // возвращает последний добавленный элемент и удаляет его из стека
  pop(): T | null {
    return this.params.currentList.pop() || null;
  }

  // возвращает первый элемент со дна стека и удаляет его
  shift(): T | null {
    return this.params.currentList.shift() || null;
  }

  // добавляет элемент на дно стека
  unshift(userValue: T): T | null {
    let lastValue: T | null = null;
    const { currentList, maxLength } = this.params;
    if (maxLength && currentList.length >= maxLength) {
      lastValue = this.params.currentList.pop() || null;
    }
    this.params.currentList.unshift(userValue);
    return lastValue;
  }

  clear(): void {
    this.params.currentList = [];
  }
}
