let numbers = [5,4]
const BUTTONS = document.querySelectorAll("button")
const DISPLAY = document.querySelector(".paraDisplay")
let oldText = ""
let newText = ""
//declaring basic operation functions

//function sum
function doAdd(a,b){
    a = Number(a)
    b = Number(b)
    const sum = a+b
    console.log(sum)
    return sum
}

//function substract
function doSubstract(a,b){
    const substract = a-b
    console.log(substract)
    return substract
}

//function multiply
function doMultiply(a,b){
    const multiply = a*b
    console.log(multiply)
    return multiply
}

//function divide, not allowing with 0
function doDivide(a,b) {
    let hasZero = false;
        if (a === 0 || b === 0) {
            hasZero = true;
        }
    if (hasZero) {
        return console.log("Cannot divide by 0")
    }
    const divide = a/b
    console.log(divide)
    return divide
}

//function operate, main core of the calculator, takes 2 numbers and the symbol between them
function doOperate(a, b, symbol){
    switch (symbol){
        case "+":
            return doAdd(a,b)
        case "-":
            return doSubstract(a,b)
        case "/":
            return doDivide(a,b)
        case "*":
            return doMultiply(a,b)
        default: return console.log("wrong operator")
    }
}

function updateText(text){
    oldText = newText
    newText = `${oldText}${text}`
    if(text === "+")
    {
        DISPLAY.textContent = doOperate(oldText, newText, text)
    }
        else
    {
        let newText = `${oldText}${text}`
        oldText = newText
        DISPLAY.textContent = newText
    }
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
        case "+": updateText(statement);break;
        case "-": updateText(statement);break;
        case "*": updateText(statement);break;
        case "=": updateText(statement);break;
        case "+-": updateText(statement);break;
        case "clear": updateText(statement);break;
        case "%": updateText(statement);break;
        case "/": updateText(statement);break;
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
