
/**
 * Can have just if, without else if and else.
 * else if can be 0 or N
 * There can be only 0 or 1 else,
 */
let n = 5;
if (n === 0) {
    console.log('It is 0.')
} else if (n > 0) {
    console.log('Positive')
} else {
    console.log('Negative')
}

n = 0;
// also possible, but only one statement allowed
    // same as in C/C++
// BETTER NOT TO USE IN PRACTICE
if (n === 0) console.log('It is 0.');
else if (n > 0) console.log('Positive');
else console.log('Negative');

/**
 * Ternary
 * can be used when value should be returned
 */
const condition = Math.random() < 0.5
const value = condition ? 'Head' : 'Tail';
console.log(condition, value)