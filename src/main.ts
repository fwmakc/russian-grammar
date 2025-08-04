import { input } from './helpers/input.helper';

export async function main(): Promise<any> {
  const name = await input('Как вас зовут? ');
  console.log(`Привет, ${name}!`);

  return true;
}
