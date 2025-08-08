export function savePrepare(
  parameters: any, // { [key: string]: any },
  allowParameters: Array<string>,
): string {
  const objectParameters: { [key: string]: any } = {};

  for (const key of allowParameters) {
    objectParameters[key] = parameters[key];
  }

  return JSON.stringify(objectParameters);
}
