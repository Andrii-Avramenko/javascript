function switchExp() {
    // Змінні
    let scriptInput = Number(prompt("Ціфірку ніді (1 або 2)"));
    let message;
    // Switch
    switch (scriptInput) {
        case 1:
            message = `Ви обрали ціфірку ${scriptInput}`;
            break;
        case 2:
            message = `Ви обрали ціфірку ${scriptInput}, дякую за підтвердження`;
            break;
        default:
            message = 'це не 2 та не 1, заново давай';
    };

    // Вивід повідомлень
    console.log(message);
    alert(message);
}