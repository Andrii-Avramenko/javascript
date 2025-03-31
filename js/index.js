// 1. Створіть дві змінні для зберігання значень двох текстових полів. Перевірте, чи обидві змінні не є порожніми. Якщо обидва поля заповнені, вивести повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
const stringName = "Anna";
let stringPass = "1234";

if (stringName.length == true && stringPass.length == true) {
    console.log("Обидва поля заповнені");
} else {
    console.log("Не всі поля заповнені");
};

// 2. Створіть дві змінні для зберігання числових значень. Обчисліть їх суму. Якщо сума більше 10 — виведіть "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
let firstNumber = 4;
let secondNumber = 6;
let totalNumber = firstNumber + secondNumber;

if (totalNumber > 10) {
    console.log("Сума більша за 10");
} else if (totalNumber <= 10) {
    console.log("Сума менша або дорівнює 10");
} else {
    console.log("Сталася не передбачувана помилка, спробуйте ще раз.");
};

// 3. Створіть змінну для зберігання тексту. Перевірте, чи містить цей текст слово "JavaScript". Якщо містить, виведіть "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
isthereText = "I LOOOVEEEE JavaScript";

if (isthereText.includes("JavaScript")) {
    console.log("Текст містить слово JavaScript")
} else {
    console.log("Текст не містить слово JavaScript")
};

// 4. Створіть змінну для зберігання числа. Перевірте, чи це число більше 10 і менше 20. Якщо так — виведіть "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const theNumber = 13;

if (theNumber >= 10 && theNumber <= 20) {
    console.log("Число входить в діапазон від 10 до 20")
} else {
    console.log("Число не входить в діапазон від 10 до 20")
};

// 5. Створіть змінні для зберігання значень полів (ім'я, email, пароль). Перевірте, чи ім'я містить не менше 3 символів, чи email містить символ @ та крапку після нього, а пароль не менше 6 символів. Якщо всі умови виконані — виведіть "Перенаправлення на іншу сторінку", якщо ні — "Помилка: неправильне заповнення".
let userName = "sigmaboy"
const userEmail = "sigmaboy2@bombom.venom"
let userPass = "123456"

if (userName.length >= 3 && userEmail.includes("@") && userEmail.lastIndexOf(".") >  userEmail.indexOf("@") + 1 && userPass.length >= 6) {
    console.log("Перенаправлення на іншу сторінку")
} else {
    console.log("Помилка: неправильне заповнення")
}