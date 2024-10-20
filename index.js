//create a javascript file that will display the url for my website as / or /resume the java should return my homepage.html for / and my index.html for /resume
const http = require('http');
import * as fs from 'fs'

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/resume') {
    const filePath = req.url === '/' ? 'homepage.html' : 'index.html';
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});