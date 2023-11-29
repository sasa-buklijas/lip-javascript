// array of string
const people = ['John', 'Alex']
// but any type can be in array, even multiple in same time

console.log(people.length) // 2
console.log(people[0])  // John
console.log(people[1])  // Alex
// no error, just undefined
console.log(people[4])  // undefined

// change value
people[0] = 'Ana'
console.log(people[0])  // Ana

people[4] = 'Maria' 
console.log(people) // [ 'Ana', 'Alex', <2 empty items>, 'Maria' ]

console.log(typeof people)  // object
// how to check if object is array
console.log(Array.isArray(people))  // true

/**
 * push
 * O(1)
 */
people.push('Matt') // will add to end
console.log(people)

/**
 * pop
 * O(1)
 */
// remove and get the last one
let last = people.pop()
console.log(people, last)
// pop from empty array
const ea = []
last = ea.pop()
// return undefined and still empty
console.log(ea, last)

/**
 * unshift
 * add to beginning of array
 * O(linear)
 */
people.unshift('Ante') 
console.log(people)

/**
 * shift
 * remove of the begging of  array
 * if array empty it will return undefined
 * O(linear)
 */
people.shift('Ante')
console.log(people)

/**
 * Get element/s from array but 
 * also do not modify array !!!
 */
const [first, second] = people
console.log(first, second)
console.log(people)
// can skip element with ,
const [, second1, , , fifth] = people
console.log(second1, fifth)
console.log(people)
// get all with ..., but ... must be last
const [first1, ...rest] = people
console.log(first1, rest)
console.log(people)
let [first2, , , , , sixth] = people
console.log(first2, sixth) // sixth is undefined, because it does not exist
let [first3, , , , , sixth1 = 'Sime'] = people // now it Sime, we put it as default
console.log(first3, sixth1)

/**
 * Spread operator in array
 * can be anywhere: beginning, middle, end
 * can be used multiple times
 * used to combine multiple array
 * this is copying all elements
 */
const a1 = [1, 2, 3, 4]
const a2 = [...a1, 5, 6]
console.log(a2) // [ 1, 2, 3, 4, 5, 6 ]
const a3 = ['a', ...a1, 'b']
console.log(a3) // [ 'a', 1, 2, 3, 4, 'b' ]
const a4 = [0, ...a1]
console.log(a4) // [ 0, 1, 2, 3, 4 ]

/**
 * Looping in array
 */
a1.forEach((i) => {
    console.log(i);
});
// with index
a1.forEach((value, index) => {
    console.log(index, '---', value);
});

/**
 * map in array
 */
const b = a1.map(i => {
    //return i*2;   // number
    //return [i, i*2];    // array
    return {'index': i, 'value': i*2};  // object
});
console.log(b);

/**
 * filter array
 */
const evens = a1.filter(item => item % 2 === 0);
const odds = a1.filter(item => item % 2 !== 0);
console.log(evens)
console.log(odds)

/**
 * find in array return found
 * or undefined if not found
 *  this is problem if we have undefine in array
 *  for that use findIndex it will return -1 
 *  as index for not found element
 */
const three = a1.find(item => item === 3)
console.log(three)
const c = a1.find(item => item === 56)
console.log(c)  // undefined
const d = a1.findIndex(item => item === 56)
console.log(d)  // -1

/**
 * slicing array
 * return a copy of part or whole array
 */
console.log(a1.slice(1))    // [ 2, 3, 4 ]
console.log(a1.slice(1, 3)) // [ 2, 3 ]
console.log(a1.slice(0, 2)) // [ 1, 2 ]
// slice without arguments make copy
console.log(a1.slice()) // [ 1, 2, 3, 4 ]

/** 
 * .some(function)
 * true if only one is true
*/

/** 
 * .every(function)
 * true if all are true
*/

/**
 * .reduce(function)
 * (accumulator, current) => accumulator + current, 0 
 */

/**
 * some array function are mutating original array
 * eg. reverse()
 * use [...orgArray].reverse()  [...orgArray] make copy
 */

/**
 * .sort() uses string for sorting
 * for sorting numbers
 * .sort((a, b) => a - b)
 * .sort((b, a) => a - b) descending order
 */

let emptyArray = Array(5);
console.log(emptyArray.length) // 5
console.log(emptyArray) // [ <5 empty items> ]
// forEach will not work on array that have length but each element is empty
// THIS IS BETTER APPROACH
emptyArray = [...Array(5)];
console.log(emptyArray.length) // 5
console.log(emptyArray) // [ undefined, undefined, undefined, undefined, undefined ]]
// array with all same elements 
emptyArray = [...Array(5)].map(_ => 0);
console.log(emptyArray) // [ 0, 0, 0, 0, 0 ]
emptyArray = [...Array(5)].fill(0)
console.log(emptyArray) // [ 0, 0, 0, 0, 0 ]
// array with values starting from 1
emptyArray = [...Array(5)].map((_, index) => index + 1);
console.log(emptyArray) // [ 1, 2, 3, 4, 5 ]

/**
 * 2 arrays are only equal if they point to same array
 * 
 * must make custom function to check if each element is equal
 */
