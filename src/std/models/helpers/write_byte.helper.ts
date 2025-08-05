import { fileOpen } from './file_open.helper';
import { fileClose } from './file_close.helper';

export async function writeByte(
  filePath: string,
  buffer: Buffer,
): Promise<void> {
  const fileHandle = await fileOpen(filePath, 'a');
  await fileHandle.appendFile(buffer);
  await fileClose(fileHandle);
}
