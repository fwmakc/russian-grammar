import path from 'path';
import mime from 'mime-types';

interface FilePathsInterface {
  dirPath: string;
  extension: string;
  fileName: string;
  filePath: string;
  mimeType: string;
  name: string;
}

export function filePaths(...userPath: Array<string>): FilePathsInterface {
  const filePath = path.join(...userPath);
  const fullPath = filePath.split(/\\|\//iu);
  const fileName = fullPath.pop() || '';
  const dirPath = path.join(...fullPath);

  const extension = path.extname(filePath);
  const name = path.basename(filePath, extension);

  const mimeType = mime.lookup(fileName) || '';

  return {
    dirPath,
    extension: extension.toLowerCase().slice(1),
    fileName,
    filePath,
    mimeType,
    name,
  };
}
