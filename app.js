const BUTTONS = document.querySelectorAll("button")
const DISPLAY = document.querySelector(".paraDisplay")
const DOT = document.querySelector(".dot")
let oldText = ""
let operator = ""
let newText = ""
let oldOperator = ""
//declaring basic operation functions

//function sum
function doAdd(a,b){
    a = Number(a)
    b = Number(b)
    const sum = a+b
    const rounded = Math.floor(sum*1000)/1000
    newText = rounded
    return rounded
}

//function substract
function doSubstract(a,b){
    a = Number(a)
    b = Number(b)
    const substract = a-b
    const rounded = Math.floor(substract*1000)/1000
    newText = rounded.toString()
    return rounded
}

//function multiply
function doMultiply(a,b){
    a = Number(a)
    b = Number(b)
    const multiply = a*b
    const rounded = Math.floor(multiply*1000)/1000
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
        return DISPLAY.textContent = "Can not divide with 0"
    }
    const divide = a/b
    const rounded = Math.floor(divide*1000)/1000
    newText = rounded
    return rounded
}

//function percentage, divides original number by 100 and then multiplies by second number
function doPercentage(a,b){
    a = Number(a)
    b = Number(b)
    newText = Math.floor(((a-b)/a)*1000)/1000
    return Math.floor(((a-b)/a)*1000)/1000
}

function updateText(text){
    newText += text
    DISPLAY.textContent = newText
    if (newText.includes(".")){
        DOT.setAttribute("disabled","")
    }
    else DOT.disabled = false
    if(newText.length >15) {
        newText = newText.substring(0, 18)
    }
}
//function that calculates
function doCalculate(operator){
    switch (operator) {
    case "+": DISPLAY.textContent = String(doAdd(oldText, newText));
    operator="";
    break;
    case "-": DISPLAY.textContent = String(doSubstract(oldText, newText));
    operator="";
    break;
    case "*": DISPLAY.textContent = String(doMultiply(oldText, newText));
    operator="";
    break;
    case "/": DISPLAY.textContent = String(doDivide(oldText, newText));
    operator="";
    break;
    case "%": DISPLAY.textContent = String(doPercentage(oldText, newText));
    operator="";
    break;
    default: DISPLAY.textContent = "No operator was entered.";
    break;
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
        case "+": operator = "+"
                doCalculate(oldOperator)
                oldText=newText
                DISPLAY.textContent = operator
                newText=""
                oldOperator=operator
                break;
        case "-": operator = "-"
            doCalculate(oldOperator)
            oldText=newText
                DISPLAY.textContent = operator
                newText=""
            oldOperator=operator
            break;
        case "*": operator = "*"
            doCalculate(oldOperator)
            oldText=newText
                DISPLAY.textContent = operator
                newText=""
            oldOperator=operator
            break;
        case "/": operator = "/"
            doCalculate(oldOperator)
            oldText=newText
                DISPLAY.textContent = operator
                newText=""
            oldOperator=operator
            break;
        case "%": operator = "%"
            doCalculate(oldOperator)
            oldText=newText
                DISPLAY.textContent = operator
                newText=""
            oldOperator=operator
            break;
        case "=":doCalculate(operator)
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
                    oldOperator=""
                    oldText = ""
                    newText = ""
                    DOT.disabled = false
                    DISPLAY.textContent = newText
            break;
        default: console.log("ERROR"); break;
    }
}
document.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case(48):updateText(String.fromCharCode(event.keyCode));break;
        case(49):updateText(String.fromCharCode(event.keyCode));break;
        case(50):updateText(String.fromCharCode(event.keyCode));break;
        case(51):updateText(String.fromCharCode(event.keyCode));break;
        case(52):updateText(String.fromCharCode(event.keyCode));break;
        case(53):updateText(String.fromCharCode(event.keyCode));break;
        case(54):updateText(String.fromCharCode(event.keyCode));break;
        case(55):updateText(String.fromCharCode(event.keyCode));break;
        case(56):updateText(String.fromCharCode(event.keyCode));break;
        case(57):updateText(String.fromCharCode(event.keyCode));break;
        case(8):newText = newText.slice(0,-1);DISPLAY.textContent=newText;break;
    }
});
// assigning event listener to each button
BUTTONS.forEach( button =>{
    button.addEventListener("click", function() {
        getInfo.apply(this, [button]);
    });
})
