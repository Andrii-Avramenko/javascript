// 1
const user = {
    hobby: '',
    premium: true
}

user.hobby = 'skydiving'
user.premium = false
user.mood = 'happy'

const { hobby, premium, mood } = user

console.log(`hobby: ${hobby}, subscription: ${premium}, mood: ${mood}`)

// 2. Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
function countProps({...props}) {
    return Object.keys(props).length;
}

console.log(countProps(user));
// 3. Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const employees = {
    1: {
        name: 'Caroline',
        tasksDone: 11,
        salary: 3600
    },
    2: {
        name: 'Albina',
        tasksDone: 12,
        salary: 3800
    },
    3: {
        name: 'Yurii',
        tasksDone: 9,
        salary: 3465
    }
}

function findBestEmployee(employees) {
    let bestName = '';
    let bestTasks = 0;
    for (const {name, tasksDone} of Object.values(employees)) {
        if (tasksDone > bestTasks) {
            bestTasks = tasksDone;
            bestName = name;
        }
    }
    console.log(`${bestName}: ${bestTasks}`);
}
findBestEmployee(employees)

// 4. Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
function countTotalSalary(employees) {
    let totalSalary = 0;
    for (const {salary} of Object.values(employees)) {
        totalSalary += salary
    }
    return totalSalary
}
// Не знаю як тут використати деструктирізацію
console.log(countTotalSalary(employees))

// 5. Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
    { name: "Хліб", price: 20, amount: 2 },
    { name: "Молоко", price: 30, amount: 2 },
    { name: "Сир", price: 80, amount: 1 },
    { name: "Ковбаса", price: 50, amount: 2 },
    { name: "Газованка", price: 40, amount: 6 },
    { name: "Яйця", price: 80, amount: 1 }
];

function getAllPropValues(arr, prop) {
    let result = [];
    for (const value of arr) {
        result.push(value[prop])
    }
    return result
}

console.log(getAllPropValues(products, 'price'))

// 6. Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
function calculateTotalPrice(allProducts, productName) {
    let result = 0;
    for (const {name, price, amount} of allProducts) {
        if (name === productName) {
            result = price * amount;
        }
    }
    return result;
}

console.log(calculateTotalPrice(products, 'Яйця'))

// 7. Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

const account = {
    balance: 0,
    transactions: [],

    deposit(amount) {
        if (amount <= 0) {
            console.log("Сума має бути більше 0");
        } else {
            this.balance += amount;
            this.transactions.push({
                type: "deposit",
                amount,
            });
        }

        console.log(`Поповнено: ${amount} грн`);
    },

    withdraw(amount) {
        if (amount <= 0) {
            console.log("Сума має бути більше 0");
        } if (amount > this.balance) {
            console.log("Недостатньо коштів");
        } else {
            this.balance -= amount;
            this.transactions.push({
                type: "withdraw",
                amount,
            });
        }

        console.log(`Знято: ${amount} грн`);
    },

    getBalance() {
        console.log(`Поточний баланс: ${this.balance} грн.`);
    },

    getTransactionHistory() {
        console.log("Історія транзакцій:");
        for (const {type, amount} of this.transactions) {
            console.log(`${type}: ${amount} грн`);
        }
    }
};

console.log() // Щоб попередні завдання не заважали 7
account.deposit(600)
account.deposit(200)
account.withdraw(350)
account.getBalance()
account.withdraw(50)
account.getTransactionHistory()