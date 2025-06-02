// 1. Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Після проведення операції виводити повідомлення про залишок на рахунку.
let bankAccount = {
    ownerName: 'TomatoMan',
    accountNumber: 1234,
    balance: 250,

    deposit: function () {
        const amount = Number(prompt('Скільки грошей ви плануєте додати?'))
        const confirmation = confirm(`Ви впевнені що хочете додати ${amount}`)
        bankAccount.balance = confirmation == true ? bankAccount.balance + amount : bankAccount.balance;
    },

    withdraw: function () {
        const amount = Number(prompt('Скільки грошей ви плануєте зняти?'))
        const confirmation = confirm(`Ви впевнені що хочете зняти ${amount}`)
        bankAccount.balance = confirmation == true ? bankAccount.balance - amount : bankAccount.balance;
    }
};

// bankAccount.deposit()
// console.log(bankAccount.balance)
// bankAccount.withdraw()
// console.log(bankAccount.balance)

// 2. Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з prompt(). Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
let weather = {
    temperature: 12,
    humidity: 0,
    windSpeed: 0,

    isCold: function () {
        this.temperature = Number(prompt("Яка температура за вікном?"));
        if (this.temperature < 0) {
            alert("Температура нижче 0 градусів Цельсія");
            return true;
        } else {
            alert("Температура вище або дорівнює 0 градусів Цельсія");
            return false;
        }
    }
}

// weather.isCold()

// 3. Створіть об’єкт "user", який буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. 
const user = {
    name: 'David',
    email: 'davidovdavid13',
    password: 'dAvId13',
    login: function(inputEmail, inputPass) {
        if (inputEmail === this.email && inputPass === this.password) {
            console.log('Вхід успішний!')
        } else {
            console.log('Щось пішло не так, перевірте пошту та пароль.')
        }
    }
}

user.login('notdaviddavidov14', 'notDavid14')
user.login('davidovdavid13', 'dAvId13')

// 4. Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей в консоль. 
const movie = {
    title: 'A Minecraft Movie',
    director: 'Jared Hess',
    year: 2025,
    rating: 6,
    mustWatch: function() {
        if (this.rating > 8) {
            return true;
        } else if (this.rating <= 8) {
            return false;
        }
    }
}

console.log(movie.mustWatch())