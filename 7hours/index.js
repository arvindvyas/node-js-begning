const fs = require("fs");
const path = require('path');

fs.readFile(path.join(__dirname, 'starter.txt'),'utf-8', (err, data)=>{
  if (err) throw err;
    console.log(data);  //if you are not using utf-8 you can also use toString() method to convert buffer object to actual text
})

console.log("Hello ... !!");
// exit on uncought error

fs.writeFile(path.join(__dirname, 'reply.txt'),'Nice to meet you Mr NODE', (err)=>{
    if (err) throw err;
      console.log("write complete"); 
})

fs.appendFile(path.join(__dirname, 'text.txt'),'I am learning node', (err)=>{
    if (err) throw err;
      console.log("append complete"); 
})
  
  

process.on("uncoughtException", err=>{
  console.log(`There was an uncought error: ${err}`);
  process.exit(1);
})