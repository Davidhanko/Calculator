const BUTTONS = document.querySelectorAll("button")
const DISPLAY = document.querySelector(".paraDisplay")
const DOT = document.querySelector(".dot")
let firstDigit = ""
let secondDigit = ""

let operator = ""
let displayedTextValue = ""

// List of operators
const OPERATORS = ["+", "-", "*", "/", "%"]

//declaring basic operation functions

//function sum
function doAdd(a,b){
    a = Number(a)
    b = Number(b)
    return a+b
}

//function substract
function doSubstract(a,b){
    a = Number(a)
    b = Number(b)
    return a-b
}

//function multiply
function doMultiply(a,b){
    a = Number(a)
    b = Number(b)

    return a*b
}

//function divide, not allowing with 0
function doDivide(a,b) {
    a = Number(a)
    b = Number(b)

    let hasZero = a === 0 || b === 0;

    if (hasZero) {
        return "ERROR";
    }

    return a/b
}

//function percentage, divides original number by 100 and then multiplies by second number
function doPercentage(a,b){
    a = Number(a)
    b = Number(b)
    return b/(a/100)
}

function updateText(text){
    secondDigit += text
    DISPLAY.textContent = secondDigit
    if (secondDigit.includes(".")){
        DOT.setAttribute("disabled","")
    }
    else DOT.disabled = false
    if(secondDigit.length >15) {
        secondDigit = secondDigit.substring(0, 16)
    }
}
//function that calculates
function doCalculate(operator){
    console.log("firstDigit: " + firstDigit + " secondDigit: " + secondDigit + " operator: " + operator)
    switch (operator) {
    case "+": DISPLAY.textContent = String(doAdd(firstDigit, secondDigit));
    operator="";
    break;
    case "-": DISPLAY.textContent = String(doSubstract(firstDigit, secondDigit));
    operator="";
    break;
    case "*": DISPLAY.textContent = String(doMultiply(firstDigit, secondDigit));
    operator="";
    break;
    case "/": DISPLAY.textContent = String(doDivide(firstDigit, secondDigit));
    operator="";
    break;
    case "%": DISPLAY.textContent = String(doPercentage(firstDigit, secondDigit));
    operator="";
    break;
    default: DISPLAY.textContent = "ERROR - Unknown operator: " + operator;
    break;
    }
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
    }

    else if (OPERATORS.includes(symbol)) {
        operator = symbol

        DISPLAY.textContent = operator
    }

    else{
        switch (symbol) {
            case("Backspace"):

                if (secondDigit[secondDigit.length - 1] === "."){
                    DOT.disabled = false;
                }

                secondDigit = secondDigit.slice(0,-1);
                DISPLAY.textContent=secondDigit;

                break;
            case("Delete"):operator = "" // delete
                firstDigit = ""
                secondDigit = ""
                DOT.disabled = false
                DISPLAY.textContent = secondDigit
                break;
            case("."):if (secondDigit.includes(".")){ //dot
                return
            }
            else updateText(".")
                break;
            case("="):
                doCalculate(operator);
                firstDigit = secondDigit
                break;

            case "+-":
                if (secondDigit.charAt(0) === "-") {

                    DISPLAY.textContent = secondDigit
                }

                break;

            case "clear":
                operator = ""
                firstDigit = 0
                secondDigit = ""
                DOT.disabled = false
                DISPLAY.textContent = "0"

                break;

            default:
                console.log("ERROR - Unknown symbol: " + symbol);
                break;
        }
    }

    function handleNumber(number) {

        if (firstDigit === "") {
            firstDigit = number
            DISPLAY.textContent = firstDigit
        }

        else if (operator === "") {
            secondDigit = number
            DISPLAY.textContent = secondDigit
        }
    }


}
