let numbers = [5,4]


//declaring basic operation functions

//function sum
function doAdd(a,b){
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
function doOperate(numbers){
    let a = numbers[0], b = numbers[1]
    console.log(a,b)
    let symbol = prompt("What operation do you want to do?", "")
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
doOperate(numbers)
