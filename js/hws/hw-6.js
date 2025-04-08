// 1. Вивести в консоль всі числа від 1 до 10 за допомогою циклу while.
let numberWhile = 0

while (numberWhile !== 10) {
    numberWhile += 1
    console.log(numberWhile)
};

// 2. Вивести в консоль всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
for (let i = 0; i <= 20; i += 1) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log("Парне число i: " + i);
};

// 3. Вивести в консоль таблицю множення числа 7 за допомогою циклу for.
for (let i = 1; i <= 10; i += 1) {
    console.log(`Сім помножити на ${i} це ${7 * i}`);
};

// 4. Створити скрипт, який виводить в консоль всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
const n = 15
let addingNumber = 1;

while (true) {
    if (addingNumber >= n) {
        break;
    };
    console.log(addingNumber, "менше за", n);
    addingNumber += 1;
}

// 5. За допомогою циклу while вивести в консоль всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let multipleNumber = 0;

while (multipleNumber <= 20) {
    if (multipleNumber % 3 === 0) {
        multipleNumber += 1;
        continue;
    }

    console.log("Всі числа від 1 до 20, крім чисел, кратних 3: " + multipleNumber);
    multipleNumber += 1;
};