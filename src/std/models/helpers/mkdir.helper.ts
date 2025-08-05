import * as fsPromises from 'fs/promises';

export async function mkdir(dirPath: string): Promise<void> {
  await fsPromises.mkdir(dirPath, { recursive: true });
}
