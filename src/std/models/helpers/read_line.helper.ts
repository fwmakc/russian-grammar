import * as fs from 'fs';
import readline from 'readline';

export async function readLine(
  filePath: string,
  callback: (arg: any) => Promise<void>,
): Promise<any> {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath);

    fileStream.on('error', (err: any) => {
      fileStream.destroy();
      reject(err);
    });

    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    let queue = Promise.resolve();

    rl.on('line', async (line: string) => {
      queue = queue.then(async () => {
        await callback(line);
      });
    });

    rl.on('close', async () => {
      await Promise.all([queue]);
      fileStream.destroy();
      resolve(true);
    });

    rl.on('error', (err) => {
      fileStream.destroy();
      reject(err);
    });
  });
}
