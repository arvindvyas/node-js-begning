const fs = require('fs');

const rs = fs.ReadStream("././lorem.txt", {encoding: 'utf8'});
const ws = fs.WriteStream("././new-lorem.txt");

// rs.on('data', (dataChunk)=>{
//     ws.write(dataChunk);
// })


rs.pipe(ws);