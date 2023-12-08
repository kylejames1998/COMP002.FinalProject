// Pushes value of whatever button is clicked to the input field
function pushToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// clears display when the clear button is clicked
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = "";
}

function equals() {
    const display= document.getElementById('display');
    display.value = display.value + "=";
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
            clearDisplay();
            enableButtons();
        // if the "=" is clicked, the calculate function is called and the expression is calculated
        } else if (button.textContent === '=') {
            calculate();
            equals();
        // when any other buttons are clicked, the
        } else {
            pushToDisplay(button.textContent);
        }
    });
});