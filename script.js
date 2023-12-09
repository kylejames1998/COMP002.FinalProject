let operatorClicked = false;

function pushToDisplay(value) {
    const display = document.getElementById('display');
    const currentValue = display.value;
    
    // Check if the value is an operator
    const isOperator = ['+', '-', '*', '/'].includes(value);

    // If the value is an operator and an operator has already been clicked the user is alerted
    if (isOperator && operatorClicked) {
        alert("Invalid Input!");
        return;
    } else {
        // if the user input is not an operator, the value is pushed to the text input area (number)
        display.value += value;
        // Update operatorClicked flag if the value is an operator
        operatorClicked = isOperator;
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
    // try block that tries to calculate the expression
    try {
        display.value = eval(display.value) 
         let result = display.value;
        localStorage.setItem("lastExpression" , result);
        disableButtons();
    // if an error is thrown, an alert is shown and the input area is "cleared"
    } catch (error) {
        alert("Error!")
        display.value = ""
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
            // calculate is called to perform the cslculations of the the expression thats currebtly in the input area
            calculate();
        // when any other buttons are clicked, the
        } else {
            // if any of the number buttons are clicked, the text content of the spexifoc button is pushed to the inout area 
            pushToDisplay(button.textContent);
        }
    });
});