let numbers = [5,4]
const BUTTONS = document.querySelectorAll("button")
const DISPLAY = document.querySelector(".paraDisplay")
let oldText = ""
let operator = ""
let newText = ""
//declaring basic operation functions

//function sum
function doAdd(a,b){
    a = Number(a)
    b = Number(b)
    const sum = a+b
    const rounded = sum.toFixed(3)
    newText = rounded
    return rounded
}

//function substract
function doSubstract(a,b){
    a = Number(a)
    b = Number(b)
    const substract = a-b
    const rounded = substract.toFixed(3)
    newText = rounded.toString()
    return rounded
}

//function multiply
function doMultiply(a,b){
    a = Number(a)
    b = Number(b)
    const multiply = a*b
    const rounded = multiply.toFixed(3)
    newText = rounded
    return rounded
}

//function divide, not allowing with 0
function doDivide(a,b) {
    a = Number(a)
    b = Number(b)
    let hasZero = false;
        if (a === 0 || b === 0) {
            hasZero = true;
        }
    if (hasZero) {
        return DISPLAY.textContent = "Cannot divide with 0"
    }
    const divide = a/b
    const rounded = divide.toFixed(3)
    newText = rounded
    return rounded
}

//function percentage, divides original number by 100 and then multiplies by second number
function doPercentage(a,b){
    a = Number(a)
    b = Number(b)
    newText = (((a-b)/a)*100).toFixed(3)
    return (((a-b)/a)*100).toFixed(3)
}

function updateText(text){
    newText += text
    DISPLAY.textContent = newText
}

//function that checks and prints out the symbol on the display
function getInfo(button){
    let statement = button.innerText
    switch (statement){
        case "1": updateText(statement);break;
        case "2": updateText(statement);break;
        case "3": updateText(statement);break;
        case "4": updateText(statement);break;
        case "5": updateText(statement);break;
        case "6": updateText(statement);break;
        case "7": updateText(statement);break;
        case "8": updateText(statement);break;
        case "9": updateText(statement);break;
        case "0": updateText(statement);break;
        case ".": updateText(statement);break;
        case "+": operator = "+"
                oldText=newText
                DISPLAY.textContent = operator
                newText=""
                break;
        case "-": operator = "-"
                oldText=newText
                DISPLAY.textContent = operator
                newText=""
                break;
        case "*": operator = "*"
                oldText=newText
                DISPLAY.textContent = operator
                newText=""
                break;
        case "/": operator = "/"
                oldText=newText
                DISPLAY.textContent = operator
                newText=""
                break;
        case "%": operator = "%"
                oldText=newText
                DISPLAY.textContent = operator
                newText=""
                break;
        case "=": switch (operator){
                    case "+": DISPLAY.textContent = String(doAdd(oldText, newText));operator="";break;
                    case "-": DISPLAY.textContent = String(doSubstract(oldText, newText));operator="";break;
                    case "*": DISPLAY.textContent = String(doMultiply(oldText, newText));operator="";break;
                    case "/": DISPLAY.textContent = String(doDivide(oldText, newText));operator="";break;
                    case "%": DISPLAY.textContent = String(doPercentage(oldText, newText));operator="";break;
            default: DISPLAY.textContent = "No operator was entered.";break;


        }
                break;
        case "+-": if (newText.charAt(0) === "-") {
            newText = newText.replace("-", "");
            DISPLAY.textContent = newText
        }
            else{
                newText = `-${newText}`
            DISPLAY.textContent = newText
        }
        break;
        case "clear":operator = ""
                    oldText = ""
                    newText = ""
                    DISPLAY.textContent = newText
            break;
        default: console.log("ERROR"); break;
    }
}

// assigning event listener to each button
BUTTONS.forEach( button =>{
    button.addEventListener("click", function() {
        getInfo.apply(this, [button]);
    });
})

// doOperate(numbers)
