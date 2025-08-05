import * as fsPromises from 'fs/promises';

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fsPromises.access(filePath);
    return true;
  } catch (e) {
    return false;
  }
}
