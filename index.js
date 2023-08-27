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
// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, toppings)=>{
//   console.log(`order recevied! Bakking a ${size} pizza with ${toppings}`);
// })

// emitter.on("order-pizza", (size)=>{
//     if (size == "large"){
//       console.log("apni cold drink sath leke aana");
//     }
// })

// console.log("Do work before events occure into the system");
// emitter.emit("order-pizza", "large", "chees");

// ** self event module creation 

// const PizzaShop = require("./pizza-shop");
// const DrinkMachine = require("./drink-machine");
// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();
// pizzaShop.on("order", (size, topping)=>{
//   console.log(`Order recived !! Baking ${size} pizza with ${topping}` )
//   drinkMachine.serveDrink(size);
// })
// pizzaShop.order("large", "double chees");
// pizzaShop.displayOrder();

// ** Buffer

// const buffer = new Buffer.from("Arvind");
// // buffer.write("Kumar Vyas"); wil prent kumar 
// console.log(buffer.toJSON());
// console.log(buffer);

// console.log(buffer.toString());

// ** FS module **

// const fs = require("node:fs")
// console.log("first");
// const fileContents = fs.readFileSync("./file.txt", "utf-8");
// console.log(fileContents);
// console.log("second");
// fs.readFile("./file.txt", "utf-8",(error, data)=>{
//   if (error){
//     console.log(error);
//   }else{
//     console.log(data);
//   }
// })
// console.log("third");

// // write file
// fs.writeFileSync("./greet.txt", "Hello World!");

// // async version of file write

// fs.writeFile("./greet.txt", " Hello Arvind",{flag: "a"}, (err)=>{
//     if (err){
//       console.log(err);
//     }else{
//       console.log("file written");
//     }
// })

// ** fs promise ** 
// const fs = require("node:fs/promises");
// console.log("first");
// fs.readFile("./file.txt", 'utf-8')
//     .then(data=>console.log(data))
//     .catch(error=> console.log(error))

// console.log("last");

// async function readFile(){
//     try{
//       const data = await fs.readFile("file.txt", "utf-8");
//       console.log(data);
//     }catch(error){
//         console.log(error);

//     }

// }

// readFile();

// const fs = require("node:fs");

// const readableStreem = fs.createReadStream("./file.txt", 
// {encoding: "utf-8",
// highWaterMark: 2,
// // });
// // const writableStreem = fs.createWriteStream("./file2.txt");

// // readableStreem.on("data", (chunk)=>{
// //   console.log(chunk);
// //   writableStreem.write(chunk);
// })

// ** Pipe

// const fs = require("node:fs");
// const zlib = require("node:zlib");
// const gzip = zlib.createGzip(); 
// const readableStreem = fs.createReadStream("./file.txt", {
//   encoding: "utf-8",
//   highWaterMark: 2,
// })
// const writableStreem = fs.createWriteStream("./file2.txt");

// readableStreem.pipe(writableStreem);
// readableStreem.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gza"))

const http = require("node:http");

const server = http.createServer((req, res)=>{
    res.writeHead("200", {"Content-Type": "text/plan"});
    res.end("Hello World");
})

server.listen(3000,()=>{
    console.log("server is running in port 3000");
} )