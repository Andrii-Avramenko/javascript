// 1. Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.
let result = 5 + 5 + '5';
console.log(result, typeof result);

// 2. Створіть змінну email з вашою електронною адресою. Напишіть скрипт, який перевіряє чи містить змінна email символ @ і рахує загальну кількість символів. Результат виведіть в консоль.
const email = 'andreitvmm228@gmail.com';
console.log(email.includes('@'), email.length);

// 3. Записати в окремих змінних кожне слово: My, name, is. Поєднати всі слова в змінну fullName. До змінної fullName додати ‘Viktor’. fullName вивести в консоль.
const partOne = 'My';
const partTwo = ' name';
const partThree = ' is';

let fullName = partOne + partTwo + partThree;
fullName += ' Viktor';

console.log(fullName);

// 4. Створіть змінну userName з ім’ям користувача і змінну payment з сумою до оплати. За допомогою шаблонного рядка виведіть на екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень»
function task34() {
    const userName = 'Олег';
    let payment = 69000

    alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`)
}