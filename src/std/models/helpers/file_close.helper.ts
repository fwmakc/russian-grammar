export async function fileClose(fileHandle: any): Promise<void> {
  await fileHandle.close();
}
