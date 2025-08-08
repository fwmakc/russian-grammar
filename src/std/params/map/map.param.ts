import { MapInterface } from './map.interface';
import { ParamTemplate } from '../../param.template';

export class MapParam<T> extends ParamTemplate<MapInterface<T>> {
  protected allowParameters: Array<string> = ['currentMap'];

  find(name: string) {
    return this.params.currentMap.get(name);
  }

  forEach(callback: (value: T, key: string) => void): void {
    this.params.currentMap.forEach(callback);
  }

  get() {
    return this.params.currentMap;
  }

  includes(name: string): boolean {
    return this.params.currentMap.has(name);
  }

  insert(name: string, value: T): boolean {
    const { allowKeys } = this.params;
    if (allowKeys.length && !allowKeys.includes(name)) {
      return false;
    }
    this.params.currentMap.set(name, value);
    return true;
  }

  remove(name: string): boolean {
    const { allowKeys } = this.params;
    if (allowKeys.length && !allowKeys.includes(name)) {
      return false;
    }
    if (!this.params.currentMap.has(name)) {
      return false;
    }
    this.params.currentMap.delete(name);
    return true;
  }

  clear(): void {
    this.params.currentMap.clear();
  }
}
