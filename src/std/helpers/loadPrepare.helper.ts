export function loadPrepare(
  storedValue: string,
  parameters: any, // { [key: string]: any },
  allowParameters: Array<string>,
): void {
  const parsedParameters = JSON.parse(storedValue || '{}') || {};

  for (const key in parsedParameters) {
    if (allowParameters.includes(key)) {
      parameters[key] = parsedParameters[key];
    }
  }
}
