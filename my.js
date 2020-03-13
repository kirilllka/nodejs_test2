var http = require('http');
var url = require('url');
var fs = require("fs");


var dt = require('./mymodule1');




http.createServer(function (req, res) {
 /* 
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!\n');
  res.write('Now is: ' + dt.myDateTime() + "\n");
  var q = url.parse(req.url, true).query;


  res.write(q.a + " " + q.b);

  console.log('Answering: ' + q.a + " " + q.b + " to " + req.connection.remoteAddress);
*/
fs.readFile('my.html', function(err, data) {
  console.log('reading file: ' + data)
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  
  res.write('Hello World!\n');
  
});
res.write('Hello World!\n');

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