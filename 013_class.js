class Car {
    // like constructor
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(this.name, 'driving')
    }
}
const toyota = new Car('toyota')
toyota.drive()  // toyota driving
console.log(typeof toyota) // object, just object
// ReferenceError: object is not defined
//console.log(toyota instanceof object)   
console.log(toyota instanceof Car)  // true
console.log()


/**
 * Default value
 */
class Counter {
    counter = 0;

    increment () {
        this.counter++
    }
}


/**
 * Private property
 */
class Event {
    // this is private property, because it start with #
    #eventName

    constructor(eventName) {
        this.#eventName = eventName
    }

    fire() {
        console.log(this.#eventName)
    }
}
const e = new Event('test')
// not allowed
// SyntaxError: Private field '#eventName' must be declared in an enclosing class
//      e.#eventName = 'change'
// still, can just add on fly new properties
console.log(e.newProperty)  // undefined
e.newProperty = 'something'
console.log(e.newProperty)  // something


/**
 * Static member
 * belong to class not to instance
 * aka. class variables in other languages
 */
class Square {
    static howManySquares = 0;

    constructor(size) {
        Square.howManySquares++;
        this.size = size;
    }

    area() {
        return this.size * this.size
    }
}
const a = new Square(1);
console.log(Square.howManySquares)
const b = new Square(4);
console.log(Square.howManySquares)
// but can change it, because it is public, use # as prefix for private
Square.howManySquares = 10 
console.log(Square.howManySquares)


/**
 * getter and setter
 */
class RangeValue {
    #current;
    constructor({min, max, value}){
        this.min = min;
        this.max = max;
        this.#current = value;
    }
    //getter
    get value() {
        return this.#current
    }
    //setter
    set value(newValue) {
        this.#current = Math.max(this.min, Math.min(this.max, newValue));
    }
}
const r = new RangeValue({value: 5, min: 0, max: 10});
console.log(r.value)    // 5
r.value = 15
console.log(r.value)    // 10


/**
 * Inheritance
 */
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log('yum yum')
    }
}
const s = new Animal('cat')
s.eat() // yum yum

class Bird extends Animal {
    constructor(name, weight) {
        super(name) // call constructor of base class 
        this.weight = weight
    }
    fly() {
        console.log('Flying')
    } 
}
const bi = new Bird('Tic', 3);
bi.eat()    // yum yum
bi.fly()    // Flying