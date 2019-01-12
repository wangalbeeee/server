const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.end('{ "dd" : "Hello World"}');


  

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});