// 1. Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
function drinkPreference() {
    let preferedDrink = prompt("Який з обраних напоїв вам подобається більше (Кава, Чай, Сік.)");

    switch (preferedDrink) {
        case "Кава":
            alert("Вам подобається кава");
            break;
        case "Чай":
            alert("Вам подобається чай");
            break;
        case "Сік":
            alert("Вам подобається сік");
            break;
        default:
            alert("Сталася помилка спробуйте ще раз!")
    };
}
// 2. Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
function dayOfWeek() {
    let dayOfWeek = Number(prompt("Який це день тижня? (Цифрою)"));

    switch (dayOfWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            alert("Це робочий день");
            break;
        case 6:
        case 7:
            alert("Це вихідний день");
            break;
        default:
            alert("Переконайтеся що цифра від 1 до 7!")
    }
}
// 3. Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
function yearSeason() {
    const month = Number(prompt("Введіть номер місяця (Наприклад 1, 6 і т.д.)"));
    
    switch (month) {
        case 12:
        case 1:
        case 2:
            alert("Це зимова пора року");
            break;
        case 3:
        case 4:
        case 5:
            alert("Це весняна пора року");
            break;
        case 6:
        case 7:
        case 8:
            alert("Це літня пора року");
            break;
        case 9:
        case 10:
        case 11:
            alert("Це осіння пора року");
            break;
        default:
            alert("Сталася помилка! Некоректний формат, переконайтеся що це цифра.")
    }
}
// 4. Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
function selectedColour() {
    const colour = prompt("Оберіть колір зі списку: зелений, жовтий або червоний");

    switch (colour) {
        case "зелений":
            alert("Йти");
            break;
        case "жовтий":
            alert("Чекати");
            break;
        case "червоний":
            alert("Стоп");
            break;
        default:
            alert("Переконайтеся що текст має маленькі літери та написаний коректно")
    }
}
// 5. Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.
function calculator() {
    const firstNumber = Number(prompt("Оберіть першу цифру"));
    const operator = prompt("Оберіть оператор (+, -, *, /.)");
    const secondNumber = Number(prompt("Оберіть другу цифру"));

    let calculationResult;

    switch (operator) {
        case "+":
            calculationResult = firstNumber + secondNumber;
            alert(calculationResult);
            break;
        case "-":
            calculationResult = firstNumber - secondNumber;
            alert(calculationResult);
            break;
        case "*":
            calculationResult = firstNumber * secondNumber;
            alert(calculationResult);
            break;
        case "/":
            calculationResult = secondNumber === 0 ? "Ви не можете ділити на нуль!" : firstNumber / secondNumber; 
            
            alert(calculationResult);
            break;
        
        default:
            alert("Щось пішло не так! Переконайтеся що використовували цифри та обрали коректний оператор.");
    }
}