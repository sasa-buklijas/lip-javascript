# lip-javascript

# Basic Types [source](./002_basic_data_types.js)

# let vs. const [source](./003_variables.js)

# Equality loose and stric
Always all use only strict `===` and `!==`.
Do not use loose `==` or `!=`.

# Falsy
`false`, `null`, `undefined`, `''` (empty string), `0`, `NaN` and `0n` (BigInt 0).  
Everything else is truthy.

# || or 
```
value = 0 || 10 // return 10, because 0 is falsy.

// use
let value, input;
value = input == null ? 'default value' : input
// better short version
value = input ?? 'default value'
```

[additional_examples](./015_nullish_operators_coalescing_chaining.js)  
