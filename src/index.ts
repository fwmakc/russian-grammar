import { main } from './main';

async function run(): Promise<void> {
  let infinite = true;
  // eslint-disable-next-line no-constant-condition
  while (infinite) {
    infinite = Boolean(await main());
  }
}

run().catch(console.error);
