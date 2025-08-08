import { loadPrepare } from './helpers/loadPrepare.helper';
import { savePrepare } from './helpers/savePrepare.helper';
import { ParamInterface } from './param.interface';

export abstract class ParamTemplate<T extends ParamInterface> {
  protected allowParameters: Array<string> = [];

  constructor(protected params: T) {
    this.params = params;
  }

  async load(): Promise<boolean> {
    try {
      const json: string = await this.params.loadCallback();
      if (!json) {
        return false;
      }
      loadPrepare(json, this, this.allowParameters);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async save(): Promise<boolean> {
    try {
      const json = savePrepare(this, this.allowParameters);
      await this.params.saveCallback(json);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
