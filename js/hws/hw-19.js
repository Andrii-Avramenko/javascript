// 1. Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно
const formEl = document.querySelector("form")

formEl.addEventListener("change",colourChange)

function colourChange(event) {
    document.body.style.backgroundColor = event.target.value
} 

// 2. Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const nameInput = document.querySelector("#name-input")
const nameOutput = document.querySelector("#name-output")

nameInput.addEventListener("input", setName)

function setName() {
    nameOutput.innerHTML = nameInput.value
}

// 2.1 Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
const validInput = document.querySelector("#validation-input")
const requiredLength = Number(validInput.dataset.length);

validInput.addEventListener("blur", focusInput)

function focusInput(event) {
    if (event.target.value.length > requiredLength) {
        event.target.className = 'invalid'
        return
    }
    event.target.className = 'valid'
}

// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.
const sizeControl = document.querySelector("#font-size-control")
const sizedText = document.querySelector("#text")

sizeControl.addEventListener("input", editFontSize)

function editFontSize() {
    sizedText.style.fontSize = `${sizeControl.value}px`
}
