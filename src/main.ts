import { File, input, print } from './std/';
// import { File, getFile, getLine, input, print, writeFile } from './std/';
// import os from 'os';

export async function main(): Promise<any> {
  const name = await input('Как вас зовут? ');
  print(`Привет, ${name}!`);

  /*
  try {
    const file = await getFile('files/names.txt');
    print(`Привет, ${file}`);

    await writeFile('files/namess.txt', file);

    await getLine('files/names.txt', async (string) => {
      await print(`: [${string}],`);
    });
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
