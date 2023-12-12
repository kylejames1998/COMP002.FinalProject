let operatorClicked = false;
let finalExpression = '';

function pushToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    // Check if the value is an operator
    const isOperator = ['+', '-', '*', '/'].includes(value);

    // checks if the current value is empty and if the user is trying to enter an operator prior to a number
    if (currentValue === '' && isOperator) {
        // if the first input is an operator, nothing is done as we don't want the user to input an operator first.
        return;
    }
    

    // check if the value is a zero
    const ifZero = value === "0"

    // If the value is an operator and an operator has already been clicked the user is alerted
    if (isOperator && operatorClicked) {
        alert("Invalid Input!");
        return;
    } else {
        // checks to see if there is already a leading zero in the input area, if there is, it doesn't allow the input of another zero
        if (ifZero && currentValue === "0") {
            return;
        }
        display.value += value;
        // Update operatorClicked if the value is an operator
        operatorClicked = isOperator;
        // updates the expression with the new value from user input
        finalExpression += value;
    }
}

// clears display when the clear button is clicked
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = "";
    operatorClicked = false;
}


// function that disables all buttons accept the clear button
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.textContent !== "C") {
            // sets the buttons to disabled (they cant be clicked)
            button.disabled = true;
        }
    });
}


// function that enables buttons after the clear button is clicked
function enableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        // enables the buttons (makes them clickable)
        button.disabled = false;
    });
}
// uses the eval method to calculate the expression that is in the input area
function calculate() {
    const display = document.getElementById('display');
    // checks to ensure an expression is entered prior to calculation
    if (display.value === '') {
        // alerts the user if an expression is not present
        alert('Please enter an expression');
        return;
    }
    // try block that tries to calculate the expression
    try {
        // setting 2 variables to hold the values to create the expression we want shown
        const expression = display.value;
        const result = eval(expression);
        finalExpression = `${expression}=${result}`;
        display.value = finalExpression;
        localStorage.setItem("lastExpression" , finalExpression);
        disableButtons();
        setExpression();
    // if an error is thrown, an alert is shown and the input area is "cleared"
    } catch (error) {
        alert("Error!")
        display.value = ""
        finalExpression = "";
    }
}

const buttons = document.querySelectorAll('button');
// Event listener for all the calculator buttons
buttons.forEach((button) => {
    button.addEventListener('click' , () => {
        // If the clear button is clicked, the display is cleared
        if (button.textContent ==="C") {
            // if the clear button is clicked, clearDisplay is called to clear the input area
            clearDisplay();
            // if the clear button is clicked, enableButtons is called to ensure the buttons are clickable after the display is cleared
            enableButtons();
        // if the "=" is clicked, the calculate function is called and the expression is calculated
        } else if (button.textContent === '=') {
            // calculate is called to perform the calculations of the the expression thats currently in the input area
            calculate();
        // when any other buttons are clicked, the
        } else {
            // if any of the number buttons are clicked, the text content of the specific button is pushed to the input area 
            pushToDisplay(button.textContent);
        }
    });
});

// updates the last result content at time of calculation 
function setExpression() {
    let lastExpression = document.querySelector('h2');
    lastExpression.textContent =  "Last Expression: " + localStorage.getItem('lastExpression');
}