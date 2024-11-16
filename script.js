
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentInput = ''; 
let operator = '';     
let previousInput = '';


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.dataset.value;
        
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            appendToDisplay(value);
        }
    });
});


function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}


function setOperator(value) {
    if (currentInput === '') return; 
    if (previousInput !== '') {
        calculate(); 
    }
    operator = value;
    previousInput = currentInput;
    currentInput = ''; 
}


function calculate() {
    if (previousInput === '' || currentInput === '') return; 
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Error'; 
            } else {
                result = num1 / num2;
            }
            break;
        default:
            return;
    }

    display.value = result;
    previousInput = result; 
    currentInput = ''; 
    operator = ''; 
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}
