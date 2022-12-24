let numbers = [5,4,3,2,1]


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

//
//testing operations
doAdd(numbers)
doSubstract(numbers)