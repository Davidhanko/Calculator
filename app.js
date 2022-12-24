let numbers = [5,4,3,-2,1]


//declaring basic operation functions
function sum(numbers){
    const sum = numbers.reduce((total, next)=> total + next, 0)
    console.log(sum)
    return sum
}

//testing operations
sum(numbers)