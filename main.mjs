// type first and second
// import add from "./math-esm.mjs"
// type third & type of import 2
// import math from "./math-esm.mjs"

// console.log(math.add(3,4)); 
// console.log(math.substract(3,4)); 

// type of import 2 , with restracture

// import math from "./math-esm.mjs"

// const {add, substract} = math

// console.log(add(3,4));
// console.log(substract(3,3));


// for type 4 import willl be change 
//  first way to import name export
// import * as math from "./math-esm.mjs"
// const {add, substract} = math
// console.log(add(2,3));
// console.log(substract(3,3));


// second way to import name export

import {add, substract} from "./math-esm.mjs"

console.log(add(2,3));
console.log(substract(3,4));

