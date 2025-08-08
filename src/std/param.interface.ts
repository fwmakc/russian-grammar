export interface ParamInterface {
  loadCallback: () => Promise<string>;
  saveCallback: (json: string) => Promise<void>;
}
