let numbers = [5,4]


//declaring basic operation functions

//function sum
function doAdd(numbers){
    const sum = numbers.reduce((total, next)=> total + next, 0)
    console.log(sum)
    return sum
}

//function substract
function doSubstract(numbers){
    const substract = numbers.reduce((total,next) => total - next,0)
    console.log(substract)
}

//function multiply
function doMultiply(numbers){
    const multiply = numbers.reduce((total,next)=> total * next, 1)
    console.log(multiply)
}

//function divide, not allowing with 0
function doDivide(numbers) {
    let hasZero = false;
    numbers.forEach(number => {
        if (number === 0) {
            hasZero = true;
        }
    });
    if (hasZero) {
        return console.log("Cannot divide by 0");
    }
    const divide = numbers.reduce((total, next) => total / next,);
    console.log(divide)
    return divide;
}

//testing operations
doAdd(numbers)
doSubstract(numbers)
doMultiply(numbers)
doDivide(numbers)