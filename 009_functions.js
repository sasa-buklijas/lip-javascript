// if there is no return, 
// function than return undefined
function mySumNoReturn(a, b) {
    const c = a + b
}
console.log(mySumNoReturn()) // undefined
console.log(mySumNoReturn(1, 2)) // undefined


function mySum(a, b) {
    const c = a + b
    return c
}

console.log(mySum(1, 2)) // 3

/**
 * Some strange functions behavior
 * If argument is not provided,
 * then it is undefined
 */
// can call it without anything
console.log(mySum()) // NaN
// or with less
console.log(mySum(1)) // NaN
// or with more
console.log(mySum(1, 2, 3)) // 3

/**
 * In JavaScript
 * function can take as argument other functions
 */

/**
 * Error function expressions
 */
let sum;
sum = function (a, b) {
    return a + b
};
sum = (a, b) => {
    return a + b
};
// if there is only one statement that is returned  
sum = (a, b) =>  a + b
let add10
add10 = (x) =>  x + 10
// if only one parameter, than not even () are required
add10 = x =>  x + 10


/**
 * rest parameters
 * must be all
 */
function mySumAll(...rest) {
    let sum = 0;
    // Loop through each argument in the rest parameter and add it to the sum
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    // Return the final sum
    return sum;

    // shorter
    // return rest.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * With default values
 */

function mySumDefault(a=0, b=0, c=0) {
    const d = a + b + c
    return d
}
console.log(mySumDefault())  // 0
console.log(mySumDefault(1)) // 1
// will not take null or undefined, but default value
console.log(mySumDefault(1, null, 2)) // 3
console.log(mySumDefault(1, undefined, 2)) // 3
console.log(mySumDefault(1, '', 2)) // 12 as string, because of number + string + number

/**
 * argument to functions are passed by value, NOT reference 
 */
person = {name: 'John'}
function reassignObject(person) {
    person = {name: 'Peter'}
}
reassignObject(person)
console.log(person) // { name: 'John' }
// but you can modify passed object
// THIS IS BEST TO AVOID IN PRACTICE 
person = {name: 'John'}
function modifyObject(person) {
    person.name = 'Peter'
}
modifyObject(person)
console.log(person) // { name: 'Peter' }

/**
 * named parameters in JavaScript
 * this is more a hack
 */
function ranged1(value, min , max) {
    console.log('ranged1',value, min, max)
}
// impossible to know what parameter is responsible for what 
ranged1(100, 0, 10)
// but if we send objet then we use key for names
function ranged2({value, min , max}) { // are needed {}
    console.log('ranged2',value, min, max)
}
ranged2({value: 100, min: 0, max: 10})

/**
 * JavaScript does support closers
 */

/**
 * Object method definition
 */

/**
 * Allow recursion
 */