console.log (6 === 4 + 2)

console.log(6 === add(2,4)) 
function add (x,y) {
    return x + y
}

console.log ( add(2, 4))

console.log (6 === 10 - 4)
function subtract (x,y){
    return x - y
}

console.log (subtract(10,4)) 

console.log (10 === 5 * 2)

function multiply (x,y){
    return x * y
}

console.log (multiply (4,8))

console.log(5 === 10/2)

function divide (x,y){
    return x / y
}

console.log (divide (10,2))

console.log (6 === 4 + 2)
function assert (expected, actual, message){
    if (expected === actual){
       
        return true 
    }
    
    else (expected !== actual); {
        var message = "wrong!"
        return message
    }
    
}

console.log (assert (6, add (4,2)))
console.log (assert(6, add (4,4)))