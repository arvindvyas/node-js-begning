const fsPromises = require("fs").promises;
const { writeFile } = require("fs");
const path = require('path');

const fileOps = async ()=>{
    try {
      const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf-8');
      console.log(data);
      await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
      await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\n Looks I am an expert now');
      await fsPromises.rename(path.join(__dirname, 'promiseWrite.txt'),path.join(__dirname, 'promiseComplete.txt'));
      const newData = await fsPromises.readFile(path.join(__dirname, 'promiseComplete.txt'), 'utf-8');
      console.log(newData);
    } catch(err){
        console.error(err);
    }
}

fileOps();

// fsPromises.readFile(path.join(__dirname, 'starter.txt'),'utf-8', (err, data)=>{
//   if (err) throw err;
//     console.log(data);  //if you are not using utf-8 you can also use toString() method to convert buffer object to actual text
// })


// console.log("Hello ... !!");
// // exit on uncought error

// fs.writeFile(path.join(__dirname, 'reply.txt'),'Nice to meet you Mr NODE', (err)=>{
//     if (err) throw err;
//     console.log("write complete"); 

//     fs.appendFile(path.join(__dirname, 'reply.txt'),'\n\nI am learning node', (err)=>{
//         if (err) throw err;
//         console.log("Append complete"); 
//     })
      
// })

// process.on("uncoughtException", err=>{
//   console.log(`There was an uncought error: ${err}`);
//   process.exit(1);
// })