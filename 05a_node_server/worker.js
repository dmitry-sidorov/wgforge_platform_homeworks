const http = require('http');
const pid = process.pid;

http
    .createServer((request, response) => {
      for (let i =0; i < 1e7; i++) {}
      response.end(`Hello from Node.js! \n`);
    })
    .listen(8800, () => {
      console.log(`Server started. Pid: ${pid}`); 
    });