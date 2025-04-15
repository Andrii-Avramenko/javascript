// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = friends.join(', ');
console.log(string);
// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
];
// 3. Видалити
const cardToRemove = 'Карточка-3'

cards.splice(cards.indexOf(cardToRemove), 1)
// 4. Додати
const cardToInsert = 'Карточка-6'

cards.splice(4, 0, cardToInsert)
// 5. Оновити
const cardToUpdate = 'Карточка-4'

cards.splice(cards.indexOf(cardToUpdate), 1, "Карточка-3")
console.log(cards)