import * as fsPromises from 'fs/promises';
import { filePaths } from './file_paths.helper';

export async function fileOpen(
  filePath: string,
  mode: 'a' | 'r' | 'w',
): Promise<any> {
  if (['a', 'w'].includes(mode)) {
    const { dirPath } = filePaths(...filePath);
    await fsPromises.mkdir(dirPath, { recursive: true });
  }
  return fsPromises.open(filePath, mode);
}
