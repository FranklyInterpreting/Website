//create a javascript file that will display the url for my website as / or /resume
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('/homepage.html');
});

app.get('/resume', (req, res) => {
  res.send('/index.html');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});