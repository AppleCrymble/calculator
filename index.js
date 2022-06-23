let firstOperand = "";
let secondOperand = "";
let opcode = "";

const display = document.getElementById("display");
const clearButton = document.getElementById("clear-button");
const deleteButton = document.getElementById("delete-button");
const numberButtons = document.querySelectorAll(".number");
const addButton = document.

clearButton.addEventListener("click", clear)
deleteButton.addEventListener("click", deleteNumber)

numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendToDisplay(button.textContent))
});

function appendToDisplay(number){
    if (display.textContent === "0"){
        clearDisplay();
    }
    display.textContent += number;
}

function clearDisplay(){
    display.textContent = "";
}

function clear(){
    clearDisplay();
    display.textContent += "0";
}

function deleteNumber(){
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
}

function operate(operator, a, b){
    switch (operator){
        case "÷":
            return a / b;
        case "x":
            return a * b;
        case "-":
            return a - b;
        case "+":
            return a + b;
        default:
            break;
    }
}