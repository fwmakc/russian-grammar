import * as fs from 'fs';

export async function readByte(
  filePath: string,
  callback: (arg: any) => Promise<void>,
): Promise<any> {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath, { highWaterMark: 1 });

    let queue = Promise.resolve();

    fileStream.on('data', async (chunk: string | Buffer) => {
      queue = queue.then(async () => {
        await callback(chunk);
      });
    });

    fileStream.on('end', async () => {
      await Promise.all([queue]);
      fileStream.destroy();
      resolve(true);
    });

    fileStream.on('error', (err) => {
      fileStream.destroy();
      reject(err);
    });
  });
}
