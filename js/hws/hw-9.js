// 1
const logItems = function (array) {
    for (const element of array) {
        console.log(array.indexOf(element) + 1, '-', element)
    }
}

let brainrot = ['Tralalelo Tralala', 'Cappucina balerina', 'Bombombini gusini']

logItems(brainrot);
// 2
const calculateEngravingPrice = function (message, pricePerWord) {
    const words = message.split(/\s/);
    const result = words.length * pricePerWord
    return result;
}

console.log(calculateEngravingPrice('I love javascript', 19))
// 3
const findLongestWord = function (string) {
    const words = string.split(/\s/);
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length)
            longestWord = word;
    };
    return longestWord
};

console.log(findLongestWord('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'))
// 4 
const formatString = function (string) {
    if (string.length > 41) {
        const result = string.substring(0, 41) + '...';
        return result;
    }
    return string;
}
console.log(formatString('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl mauris, cursus a est a, bibendum vehicula est. Sed id nisl nec orci pellentesque malesuada. Curabitur lacinia nisl ac magna pellentesque, vitae hendrerit lacus molestie. Nunc dapibus odio vel velit lacinia, sed cursus enim interdum. Sed eget elementum orci, in euismod lorem. Curabitur mollis ex lobortis metus venenatis, non vestibulum ex lobortis. Duis ut lorem pulvinar lectus tristique volutpat in sed ante.'))
console.log(formatString('Lorem ipsum dolor sit amet.'))




// 5
const checkForSpam = function (message) {
    if (message.includes('spam') || message.includes('sale')) {
        return true;
    }
    return false;
}

console.log(checkForSpam('Bottle of coke is for sale -50% off'))
// 6
let input;
const numbers = [];
let total = 0;

const addNumber = function () {
    while (true) {
        input = prompt('Введіть число нижче');
        if (input === null) {
            break;
        }
        const number = Number(input);
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert('Було введено не число, попробуйте ще раз');
        }
    }
    if (numbers.length > 0) {
        for (const num of numbers) {
            total += num;
        }
        console.log(`Загальна сума чисел дорівнює ${total}`);
    } else {
        console.log("Масив порожній. Немає що рахувати.");
    }
}

addNumber()
// 7
let logins = ['MegaBrain'];

const isLoginValid = function (login) {
    if (login.length < 17 && login.length > 3) {
        console.log('Логін підходить по параметрам')
        return true
    }
    console.log('Логін не підходить по параметрам')
    return false

}

const isLoginUnique = function (allLogins, login) {
    if (allLogins.includes(login) === true) {
        console.log('Логін вже існує')
        return false
    }
    console.log('Логін унікальний')
    return true
}

const addLogin = function (allLogins, login) {
    if (isLoginValid(login) == true && isLoginUnique(allLogins, login) == true) {
        allLogins.splice(0, 0, login)
        return 'Авторизація пройдена успіншно';
    }
}

console.log(addLogin(logins, 'SigmaBoy'), logins)