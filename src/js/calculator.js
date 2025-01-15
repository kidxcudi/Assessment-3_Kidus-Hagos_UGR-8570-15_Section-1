let displayElement = document.getElementById('display');

function appendValue(value) {
    if (displayElement.innerText === "0") {
        displayElement.innerText = value;
    } else {
        displayElement.innerText += value;
    }
}

function clearDisplay() {
    displayElement.innerText = "0";
}

function deleteChar() {
    const currentDisplay = displayElement.innerText;
    if (currentDisplay.length > 1) {
        displayElement.innerText = currentDisplay.slice(0, -1);
    } else {
        displayElement.innerText = "0";
    }
}

function calculateResult() {
    try {
        let expression = displayElement.innerText.replace(/×/g, '*').replace(/÷/g, '/');
        
        if (expression.includes('/0')) {
            displayElement.innerText = "Can't divide by zero!";
            return;
        }

        let result = eval(expression);
        displayElement.innerText = result;
    } catch (error) {
        displayElement.innerText = "Error";
    }
}