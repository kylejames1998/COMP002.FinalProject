let initialValue = "";

function toDisplay(value) {
    initialValue += value;
    updateDisplay();
}

function clearDisplay() {
    initialValue = '';
    updateDisplay();
}