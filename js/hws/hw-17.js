// 1. Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
const textEl = document.querySelector("#change-text")
const buttonEl = document.querySelector("#change-button")

buttonEl.innerHTML = textEl.innerHTML

// 2. Створити розмітку з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
const image1 = document.querySelector("#image-1")

image1.src = "https://m.media-amazon.com/images/I/71TMXvlyQ-L.jpg"

// 3. Створити розмітку з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
const hyperlink = document.querySelector("#hyperlink")
const image2 = document.querySelector("#image-2")

hyperlink.href = "https://wagwalking.com/daily/10-fun-facts-about-ginger-cats"
image2.alt = "Рижий кіт на килимі"

// 4. Створити розмітку зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
const list = document.querySelector('#list')
const firstItem = list.querySelector('li')

firstItem.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod animi, inventore error tempore quis reprehenderit voluptatibus numquam deleniti nesciunt illum explicabo excepturi, veritatis quo ab eligendi? Quo iusto labore natus."