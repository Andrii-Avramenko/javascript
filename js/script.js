// const hello = function(message) {
//     if (message.length <= 5) {
//         console.log("Повідомлення занадто коротке!")
//     } else {
//         console.log("Повідомлення надіслано!")
//     }
// }

const hello = function(message) {
    const result = message.length <= 5 ? "Повідомлення занадто коротке!" : "Повідомлення надіслано!";
    return;
}

const notification = hello("Hello world!")
console.log(notification)

console.log(hello("Bye"))