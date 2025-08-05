Библиотка которая работает с русской грамматикой

Она делает полный анализ слова и выдает результат в массиве объектов.

Массив объектов потому что есть вероятность, что слово может быть определено по-разному. Поэтому в каждом объекте есть показатель вероятности.

Нейминг будет оперделен чуть позже, а пока опишем структуру.

- само исходное слово,
- вероятность, 0-100,
- часть речи: сущ, гл, прил и т.д.,
- характеристики части речи, напр для сущ и прил это склонение, для гл - спряжение, время и т.д.
- число: ед, мн,
- род: муж, жен, ср,
- части слова, структура или строение слова: приставки, суффиксы, окончания, корни (если слово сложное)

# Примеры работы с файлами

```
  try {
    const file = new File('src/files/names.txt');
    await file.init();
    console.log(file);

    const content = await file.read();
    console.log(content);

    await file.readLine(async (line) => {
      console.log('>>' + line);
    });

    await file.readByte(async (byte) => {
      const value = byte[0];
      const uint8Array = new Uint8Array(byte);
      console.log({ byte, value, uint8Array });
    });

    const filen = new File('src/files/names_new.txt');

    if (!(await filen.exists())) {
      await filen.create();
    } else {
      await filen.clear();
    }

    await file.readLine(async (line) => {
      await filen.writeLine(line);
    });

    await file.readByte(async (byte) => {
      await filen.writeByte(byte);
    });

    await filen.delete();

    await file.mkdir('src/files/inner');

    await file.copy('src/files/inner');
    console.log(file);

    await file.copy('src/files', 'names_copy.txt');
    console.log(file);

    await file.rename('names_renamed.txt');
    console.log(file);

    await file.move('src/files/inner');
    console.log(file);

    await file.move('src/files/inner', 'names_moved.txt');
    console.log(file);
  } catch (e: any) {
    console.log('Error: ', e.message);
  }
```