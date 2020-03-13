var http = require('http');

var dt = require('./mymodule1');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!\n');
  res.write('Now is: ' + dt.myDateTime());
  res.write(req.url);
  res.write(req.ip);
  res.end();
}).listen(3000);

console.log(`Server running...`);



/*
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World hohoho');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/