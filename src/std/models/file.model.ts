import * as fsPromises from 'fs/promises';
import path from 'path';
import { fileClose } from './helpers/file_close.helper';
import { fileOpen } from './helpers/file_open.helper';
import { filePaths } from './helpers/file_paths.helper';
import { fileStats } from './helpers/file_stats.helper';
import { readLine } from './helpers/read_line.helper';
import { writeLine } from './helpers/write_line.helper';
import { fileExists } from './helpers/file_exists.helper';
import { readByte } from './helpers/read_byte.helper';
import { writeByte } from './helpers/write_byte.helper';
import { mkdir } from './helpers/mkdir.helper';

export class File {
  createdAt: number | null;
  dirPath: any = null;
  extension: string;
  fileName: any = null;
  modifiedAt: number | null;
  name: string;
  mimeType: string;
  size: number | null;

  private filePath: string;

  constructor(filePath: string) {
    this.filePaths(filePath);
  }

  private async fileClose(fileHandle: any): Promise<void> {
    return await fileClose(fileHandle);
  }

  private async fileOpen(mode: 'a' | 'r' | 'w'): Promise<any> {
    const fileHandle = await fileOpen(this.filePath, mode);
    await this.fileStats();
    return fileHandle;
  }

  private filePaths(userPath: string): void {
    const { dirPath, extension, fileName, filePath, name, mimeType } =
      filePaths(userPath);

    this.dirPath = dirPath;
    this.extension = extension;
    this.fileName = fileName;
    this.filePath = filePath;
    this.name = name;
    this.mimeType = mimeType;
  }

  private async fileStats(): Promise<void> {
    const { createdAt, modifiedAt, size } = await fileStats(this.filePath);

    this.createdAt = createdAt;
    this.modifiedAt = modifiedAt;
    this.size = size;
  }

  async clear(): Promise<void> {
    await fsPromises.truncate(this.filePath, 0);
  }

  async copy(dirPath: string, fileName = ''): Promise<void> {
    const destinationPath = path.join(dirPath, fileName || this.fileName);
    await fsPromises.copyFile(this.filePath, destinationPath);
    this.filePaths(destinationPath);
  }

  async create(): Promise<void> {
    await this.write('');
  }

  async delete(): Promise<void> {
    await fsPromises.unlink(this.filePath);
  }

  async exists(): Promise<boolean> {
    return await fileExists(this.filePath);
  }

  async init(): Promise<void> {
    await this.fileStats();
  }

  async mkdir(dirPath: string): Promise<void> {
    await mkdir(dirPath);
  }

  async move(dirPath: string, fileName = ''): Promise<void> {
    const destinationPath = path.join(dirPath, fileName || this.fileName);
    await fsPromises.rename(this.filePath, destinationPath);
    this.filePaths(destinationPath);
  }

  async read(): Promise<any> {
    const fileHandle = await this.fileOpen('r');
    const data = await fsPromises.readFile(this.filePath, 'utf8');
    await this.fileClose(fileHandle);
    return data;
  }

  async readByte(callback: (arg: any) => Promise<void>): Promise<any> {
    return readByte(this.filePath, callback);
  }

  async readLine(callback: (arg: any) => Promise<void>): Promise<any> {
    return readLine(this.filePath, callback);
  }

  async rename(fileName: string): Promise<void> {
    const destinationPath = path.join(this.dirPath, fileName);
    await fsPromises.rename(this.filePath, destinationPath);
    this.filePaths(destinationPath);
  }

  async write(data: string, mode: 'a' | 'w' = 'w'): Promise<void> {
    const fileHandle = await this.fileOpen(mode);
    await fileHandle.writeFile(data);
    await this.fileStats();
    await this.fileClose(fileHandle);
  }

  async writeByte(buffer: Buffer): Promise<void> {
    await writeByte(this.filePath, buffer);
    await this.fileStats();
  }

  async writeLine(data: string): Promise<void> {
    await writeLine(this.filePath, data);
    await this.fileStats();
  }
}
