import * as readline from 'readline';

/**
 * Reads a single key press from the standard input and returns it as a buffer.
 *
 * This function enables raw mode for the standard input, allowing it to capture
 * key presses immediately without waiting for the Enter key to be pressed.
 *
 * @async
 * @function getch
 * @returns {Promise<Buffer>} A promise that resolves with a buffer containing the pressed key.
 *
 * @example
 * (async () => {
 *   const key = await getch();
 *   console.log(`You pressed: ${key.toString()}`);
 * })();
 */
export async function getch(): Promise<Buffer> {
  return new Promise((resolve) => {
    const { stdin } = process;
    stdin.setRawMode(true);

    const rl: any = readline.createInterface({
      input: stdin,
      output: undefined,
      terminal: false,
    });

    const handleKeyPress = (key: Buffer) => {
      stdin.setRawMode(false);
      rl.input.off('data', handleKeyPress);
      rl.close();

      resolve(key);
    };

    rl.input.on('data', handleKeyPress);
  });
}
