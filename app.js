const BUTTONS = document.querySelectorAll("button")
const DISPLAY = document.querySelector(".paraDisplay")

let firstDigit = ""
let secondDigit = ""

let operator = ""

// List of operators
const OPERATORS = ["+", "-", "*", "/", "%"]


//function sum
function doAdd(a,b){
    return a + b
}

//function substract
function doSubstract(a,b){
    return a - b
}

//function multiply
function doMultiply(a,b){
    return a * b
}

//function divide, not allowing with 0
function doDivide(a,b) {
    if (b === 0) {
        return "ERROR";
    }

    return a/b
}

//function percentage, divides original number by 100 and then multiplies by second number
function doPercentage(a,b){
    return (a/100)*b
}

function handleBackspace() {
    if (isSecondNumSet()) {
        SetSecondNum(secondDigit.slice(0, -1))
    }
    else if (isOperatorSet()) {
        SetOperator("")
    }
    else if (isFirstNumSet()) {
        SetFirstNum(firstDigit.slice(0, -1))
    }
}

function handleClear() {
    SetFirstNum("")
    SetSecondNum("")
    SetOperator("")
}

function handleDot() {
    if (isSecondNumSet()) {
        if (!secondDigit.includes(".")) {
            secondDigit += "."
        }
    }
    else if (isFirstNumSet()) {
        if (!firstDigit.includes(".")) {
            firstDigit += "."
        }
    }
}

function handleSignSwitch() {
    if (isSecondNumSet()) {
        if (secondDigit.charAt(0) === "-") {
            secondDigit = secondDigit.slice(1)
        }
        else {
            secondDigit = "-" + secondDigit
        }
    }
    else if (isFirstNumSet()) {
        if (firstDigit.charAt(0) === "-") {
            firstDigit = firstDigit.slice(1)
        }
        else {
            firstDigit = "-" + firstDigit
        }
    }
}

//function that calculates
function doCalculate(operator){
    let result = 0

    //Converts the string to a number
    let firstNum = Number(firstDigit)
    let secondNum = Number(secondDigit)

    switch (operator) {
        case "+":
            result = doAdd(firstNum, secondNum)
            break;

        case "-":
            result = doSubstract(firstNum, secondNum)
            break;

        case "*":
            result = doMultiply(firstNum, secondNum)
            break;

        case "/":
            result = doDivide(firstNum, secondNum)
            break;

        case "%":
            result = doPercentage(firstNum, secondNum)
            break;
    }

    SetFirstNum(result)
    SetSecondNum("")
    SetOperator("")

}
//function that checks and prints out the symbol on the display
function getInfo(button){
    handleSymbol(button.innerText)
}

document.addEventListener("keydown", event => {
   handleSymbol(event.key)
});

// assigning event listener to each button
BUTTONS.forEach( button =>{
    button.addEventListener("click", function() {
        getInfo.apply(this, [button]);
    });
})

function handleSymbol(symbol) {

    // Check if the key pressed is a number
    if (symbol >= 0 && symbol <= 9) {
        handleNumber(symbol)
    } else if (OPERATORS.includes(symbol)) {
        handleOperator(symbol)
    }

    else{
        switch (symbol) {
            case("Backspace"):
                handleBackspace()
                break;

            case("clear"):
            case("Delete"):
                handleClear()
                break;

            case("."):
                handleDot()
                break;

            case("="):
                doCalculate(operator);
                break;

            case "+-":
                handleSignSwitch()
                break;

        }
    }

    UpdateDisplay()
}

function handleNumber(number) {

        if (canSetFirstNum()) {
            AppendToFirstNum(number)

        }
        else if(canSetSecondNum()) {
            AppendToSecondNum(number)
        }
    }

function handleOperator(newOperator) {
    if (!canSetOperator()) {
        doCalculate(operator)
    }

    SetOperator(newOperator)
}

function isFirstNumSet() {
    return firstDigit !== ""
}

function isSecondNumSet() {
    return secondDigit !== ""
}

function isOperatorSet() {
    return operator !== ""
}

function canSetFirstNum() {
    return !isOperatorSet() && !isSecondNumSet()
}

function canSetSecondNum() {
    return isFirstNumSet() && isOperatorSet()
}

function canSetOperator() {
    return isFirstNumSet() && !isOperatorSet() && !isSecondNumSet();
}

function AppendToFirstNum(number) {
    firstDigit += number
}

function AppendToSecondNum(number) {
    secondDigit += number
}

function SetFirstNum(num) {
    firstDigit = num
}

function SetSecondNum(num) {
    secondDigit = num
}

function SetOperator(op) {
    operator = op
}

function UpdateDisplay() {

    let displayText = ""

    if (isFirstNumSet()) {
        displayText += firstDigit
    }

    if (isOperatorSet()) {
        displayText += operator
    }

    if (isSecondNumSet()) {
        displayText += secondDigit
    }

    DISPLAY.textContent = displayText
}










