const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalsButton = document.getElementById('equals');
let currentExpression = '';


// Update the display
const updateDisplay = (value) => {
    display.value = value;
};

// clear function
const clearCalculator = () => {
    currentExpression = '';
    updateDisplay('0');
};

const calculateResult = () => {
    try {
        const result = eval(currentExpression);
        currentExpression = result.toString();
        updateDisplay(currentExpression);
    } catch (error) {
        updateDisplay('Error');
        currentExpression = "";

    }
};

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (value) {
            if (value === "0" && currentExpression.slice(-1) === "/") {
                updateDisplay('Cannot divide by 0');
                setTimeout(() => updateDisplay(currentExpression), 2000);
            } else {
                currentExpression += value;
                updateDisplay(currentExpression);
            }
        }
    });
});

clearButton.addEventListener('click', clearCalculator);
equalsButton.addEventListener('click', calculateResult);
