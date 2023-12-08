const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;

function updateDisplay() {
    const display = document.getElementById('display');
    // updates value of displayValue
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('#calculator');
keys.addEventListener('click' , (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('oButton')) {
        console.log('oButton', target.value);
        return;
    }

    if (target.classList.contains('clear')) {
        console.log('clear' , target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});
