const fs = require("fs");

fs.readFile("././starter.txt",'utf-8', (err, data)=>{
  if (err) throw err;
    // console.log(data);  if you are not using utf-8 you can also use toString() method to convert buffer object to actual text
})