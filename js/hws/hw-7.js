// 1. Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
let numbersItems = [127,23,1];
numbersItems[1] = 10;

// 2. Створити масив із трьох рядків. Додати до масиву ще одну рядків.
let addMoreList = [7,"Chicken Jockey", 69];
addMoreList[3] = "Flint and Steel";

// 3. Створити скрипт який поверне суму всіх чисел в масиві.
const addingList = [7,5,12,18];
let addingResult = 0;

for (let i = 0; i < addingList.length; i += 1) {
    addingResult += addingList[i]
};

console.log("Сума чисел", addingResult);
// 4. Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const fiveNumbers = [2, 5, 6, 12, 8]

for (let i = 0; i < fiveNumbers.length; i += 1) {
    console.log(`${i + 1} Число з 5: ${fiveNumbers[i]}`)
};
// 5. Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.
const stringList = ["Apple", "Car", "Capuchina Balerina", "WATER BUCKET RELEASE", "Hot Lava and Chicken"];

for (let i = 0; i < stringList.length; i += 1) {
    if (stringList[i].length > 5) {
        console.log(`Речення ${stringList[i]} містить більше 5 символів`)
    };
};
// 6. Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const tenNumbers = [23, 5, 56, 102, 8, 7, 92, 43, 10, 86]
const highestNumber = Math.max(...tenNumbers)

console.log("Найбільше число:", highestNumber)
// 7. Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
for (let i = 0; i < tenNumbers.length; i += 1) {
    if (tenNumbers[i] % 2 !== 0) {
        continue;
    }
    console.log("Парне число з масиву: ", tenNumbers[i]);
};