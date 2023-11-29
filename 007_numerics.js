// JavaScript have only ne type for float, integer signed or unsigned
// it is: 64-bit signed float

// == check only value
console.log(2 == 2.00)  // true
// === check value and type
console.log(2 === 2.00) // true

// _ and e
let million
// same
million = 1_000_000
console.log(million === 1000000)
million = 1e6
console.log(million === 1000000)
console.log(1e-2 === 0.01) // after for less than 0, give negative

// not precise float point
console.log(0.1 + 0.2) // 0.30000000000000004

// like in C
// same for --
{
let a = 0
let b = a++
console.log(a) // 1
console.log(b) // 0
}
{
    let a = 0
    let b = ++a
    console.log(a) // 1
    console.log(b) // 1
}

// MAX and MIN value
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) //-9007199254740991
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER))  // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false
// careful with small values
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 0.0001)) // true, but it is ERROR
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 0.4)) // true, but it is ERROR
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 0.5)) // false
// can work but it is, not safe, and typeof is strange 'number100' 
console.log(Number.MAX_SAFE_INTEGER+100, Number.isSafeInteger(Number.MAX_SAFE_INTEGER+100), typeof Number.MAX_SAFE_INTEGER+100)

// Infinity
console.log(1 / 0, typeof 1 / 0)   //  Infinity Nan 
console.log(-1 / 0, typeof -1 / 0) // -Infinity Nan



//console.log('5' == 5)  // true, because it is not checking type 
//console.log('5' === 5) // false