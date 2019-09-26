const http = require('http');

const hostname = '127.0.0.1'; //local host
const port = process.env.port || 3000; // this is a node convention

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});