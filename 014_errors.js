const basic = new Error('Error message')
console.log(basic.name) // Error
console.log(basic.message)  // Error message
console.log(basic.stack)
// Error: Error message
//     at Object.<anonymous> (.../lip-javascript/014_errors.js:1:15)
//     at Module._compile (node:internal/modules/cjs/loader:1376:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
//     at Module.load (node:internal/modules/cjs/loader:1207:32)
//     at Module._load (node:internal/modules/cjs/loader:1023:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
//     at node:internal/main/run_main_module:28:49
console.log(basic instanceof RangeError)   // false
console.log(basic instanceof Error)    // true
console.log()

const re = new RangeError('Wrong number')
console.log(re.name) // RangeError
console.log(re.message)  // Wrong number
console.log(re instanceof RangeError)   // true
console.log(re instanceof Error)    // true
console.log()

/**
 * Try catch
 */
try {
    unknownFunction();
} catch (err) 
{
    // catch
    // ReferenceError: unknownFunction is not defined
}
console.log('All fine')
console.log()


/**
 * Raise exception
 */
// throw new Error('some text') // uncomment for demonstration 


/**
 * finally block
 */

try {
    // may throw exception
} catch (err) {
    // catch exception 
} finally {
    // this happens every time, regardless was there error or not
}

try {
    // may throw exception
    console.log('In try.')
    // throw new Error()    // uncomment for demonstration 
} finally {
    // this happens every time, regardless was there error or not
    console.log('Finally.')
}
// if there was error, it will stop program here, finally still happens
console.log()


/**
 * try catch
 * catch exceptions in only same synchronous code block
 */
try {
    setTimeout(() => {
        //noFunction();   // does not exist, throw exception
    }, 1000);
} catch (e) {   // will not catch exception
    console.log('Catch 1')  
}
// correct way
setTimeout(() => {
    try {
        noFunction();   // does not exist, throw exception
    } catch (e) {   // will  catch exception
        console.log('Catch 11')  
    }
}, 1000);


/**
 * difference how NodeJS and web browser handel exceptions
 * NodeJS process fail on first exception
 * browsers continue
 */


/**
 * Always use:
 * throw new Error('text')
 * never
 * throw 'text'
 *      this will work, but there will be no stack trace
 *      so you will not know from where did the error came
 */


/**
 * catch and rethrow error
 *      catch (e) { throw e}
*/