// Генерирует 6 разрядов HEX цветов
// каждый будем выбирать из массива случайным образом
function randomHEXColor() {
  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let result = "";
  // Цикл из 6-ти итераций
  for (let i = 0; i < 6; i++) {
    // на каждой итерации будем находить
    // случайный индекс
    let randomIndex = Math.floor(Math.random() * 16);
    // и записывать в результат
    result += digits[randomIndex];
  }
  return result;
}
