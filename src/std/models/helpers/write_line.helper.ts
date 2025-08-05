import { fileOpen } from './file_open.helper';
import { fileClose } from './file_close.helper';
import { fileStats } from './file_stats.helper';

export async function writeLine(filePath: string, data: string): Promise<void> {
  const fileHandle = await fileOpen(filePath, 'a');

  const { size } = await fileStats(filePath);
  const eof = size ? '\n' : '';

  await fileHandle.appendFile(eof + data);

  await fileClose(fileHandle);
}
