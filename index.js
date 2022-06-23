let firstOperand = "";
let secondOperand = "";
let currentOperator = "";
let resetScreen = false;

const display = document.getElementById("display");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const pointButton = document.getElementById("point");

pointButton.addEventListener("click", addPoint)
clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", deleteNumber)
equalsButton.addEventListener("click", evaluate)

numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendToDisplay(button.textContent));
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => setOperation(button.textContent));
});

function appendToDisplay(number){
    if (display.textContent === "0" || resetScreen){
        clearDisplay();
    }
    display.textContent += number;
}

function setOperation(operator){
    if (currentOperator !== null) evaluate();
    firstOperand = display.textContent;
    currentOperator = operator;
    resetScreen = true;
}

function addPoint(){
    if (resetScreen) clearDisplay;
    if (display.textContent === '') display.textContent = '0';
    else if (display.textContent.includes('.')) return;
    display.textContent += '.'
}

function evaluate(){
    if (currentOperator === null || resetScreen) return;
    if (currentOperator === "÷" && display.textContent === "0"){
        alert("DIVIDE BY ZERO ERROR");
        return;
    }
    secondOperand = display.textContent;
    display.textContent = round(operate(currentOperator, firstOperand, secondOperand));
    currentOperator = null;
}

function round(number){
    return Math.round(number * 1000) / 1000;
}

function clearDisplay(){
    display.textContent = "";
    resetScreen = false;
}

function clear(){
    clearDisplay();
    display.textContent += "0";
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
}

function deleteNumber(){
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    switch (operator){
        case "÷":
            return a / b;
        case "×":
            return a * b;
        case "-":
            return a - b;
        case "+":
            return a + b;
        default:
            return null;
    }
}