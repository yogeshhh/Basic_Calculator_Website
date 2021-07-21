let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenResult = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenResult += buttonText;
            screen.value = screenResult;
        }
        else if (buttonText == 'AC') {
            screenResult = "";
            screen.value = screenResult;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenResult);
        }
        else {
            screenResult += buttonText;
            screen.value = screenResult;
        }

    })
}
