// const math  = require('./math')
// const {add, substract} = math
// console.log(add(3,5));
// console.log(substract(3,5));


// const data = require("./data.json");

// console.log(data.name);
// console.log(data["address"]["street"]);


// path module it is having 40 different method to use here we will use only two
// node prefix is optional we can also call 
// const path = require("node:path")
// node prefix is optional we can also call 
// const path = require("path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute('./data.json'));

// console.log(path.join("folder1", "folder2", "index.html"));

// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "/folder2", "/index.html"));
// console.log(path.join("/folder1", "folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "/folder2", "/index.html"));
// console.log(path.resolve("/folder1", "folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

// *** callbacks ****
// - Funcation are first class objects 
// - Funcation can pass as argument to the function.
// - Funcation can return as value from other funcation.

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function greetArvind(greetFn){
//     const name = "Arvind";
//     greetFn(name);
// }
// greetArvind(greet);

// function higherOrderFuncation(callback){
//     const name = "Arvind Vyas";
//     callback(name);
// }
// higherOrderFuncation(greet);

// ** Events Module *** 
const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order-pizza", (size, toppings)=>{
  console.log(`order recevied! Bakking a ${size} pizza with ${toppings}`);
})

emitter.on("order-pizza", (size)=>{
    if (size == "large"){
      console.log("apni cold drink sath leke aana");
    }
})

console.log("Do work before events occure into the system");
emitter.emit("order-pizza", "large", "chees");