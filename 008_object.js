// properties separated by commas, property is key value pair
let obj = {a: 'some', b: 5}

console.log(obj.a) // some

// change value of key
obj.a = 'dog'
console.log(obj.a) // some

// add new property 
obj.c = 'cat'
console.log(obj.c) // some 

// value of key in property can be other object 
obj.d = {e: 'mouse'}
console.log(obj.d.e)    // accessing object inside of object 

// { a: 'dog', b: 5, c: 'cat', d: { e: 'mouse' } }
console.log(obj)

// undefined or non existing keys
console.log(obj.notExist)

/**
 * const in object
 */
const s = {a: 'some'}
s.a = 'other' // fine
// ERROR; because it is const
//s = {a: 'some'}
// fine because it is let
obj = {a: 'some'} 


const diet = 'food'
const alien = {
    name: 'john',
    'age': 45,
    // evaluate to standard JavaScript
    ['a' + 'b']: 3, // ab: 3
    ['diet' + diet]: 'fish' // dietfood: fish
}

// same 
console.log(alien.ab)
console.log(alien['ab'])

const a = {a: 'a'}
const b = {a: 'a'}
// both false, because references are not same 
console.log(a === b)
console.log(a == b)
const c = a
console.log(a === c) // tru, same object 
c.a = 'change'
//because then are same a also point to same 
console.log(a.a)

const point2d = {
    x: 0,
    y: 0,
}

let point3d

point3d = {
    x: point2d.x,
    y: point2d.y,
    z: 0,
}
// same as above
point3d = {
    ...point2d,
    z: 0,
}

// get value of x and y from point3d
const {x, y} = point3d
console.log(x, y) // 0 0
console.log(point3d) // { x: 0, y: 0, z: 0 }

// get but with custom names
const {x: pointX, y: pointY, z: pointZ} = point3d
console.log(pointX, pointY, pointZ)

// can use ... for all
const {...rest} = point3d
console.log(rest)


// test if there is key in object
console.log('x' in point2d)
// remove property from object
delete point2d.x
console.log(point2d)
