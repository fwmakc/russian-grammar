import { getch } from './std/';
// import { getch, print } from './std/';
// import { getch, input, print } from './std/';
// import { File } from 'lib-file';
// import os from 'os';

export async function main(): Promise<any> {
  // const name = await input('Как вас зовут? ');
  // print(`Привет, ${name}!`);

  const key = await getch();

  console.log(key);

  if (key[0] === 3) {
    return false;
  }

  let a = 0;
  new Uint8Array(key).forEach((code) => {
    // const r = `${('00' + code).slice(-3)}`;
    // const r = `${('0' + code.toString(16)).slice(-2)}`;
    a += code;
  });
  console.log(a);

  /*
  try {
    const file = new File('src/files/names.txt');
    const a = await file.readFile();
    console.log(a);
  } catch (e: any) {
    console.log(e.message);
  }

  const homeDir = os.homedir();
  console.log('-- homeDir', homeDir);

  const appDataPath = process.env.APPDATA;
  console.log('-- appDataPath', appDataPath);
  */

  return true;
}
