import * as fsPromises from 'fs/promises';

interface FileStatsInterface {
  size: number;
  createdAt: number;
  modifiedAt: number;
}

export async function fileStats(filePath: string): Promise<FileStatsInterface> {
  const { size, birthtimeMs, mtimeMs } = await fsPromises.stat(filePath);

  return {
    size: size,
    createdAt: birthtimeMs,
    modifiedAt: mtimeMs,
  };
}
