export async function saveLocalStorage(
  name: string,
  data: string,
): Promise<void> {
  console.log(name, data);
  // localStorage.setItem(name, data);
}
