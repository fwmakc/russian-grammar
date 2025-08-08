import * as curses from 'lib-curses';

curses.initScreen();
curses.hideCursor();

export async function main(): Promise<boolean> {
  const key = await curses.getch();
  curses.clearScreen();
  console.log({
    uint8: new Uint8Array(key),
    x16: [...new Uint8Array(key)].map((code) =>
      `${'0' + code.toString(16)}`.slice(-2),
    ),
    utf8: key.toString(),
    hex: key.toString('hex'),
  });

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
