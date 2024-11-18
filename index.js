//create a javascript file that will display the url for my website as / or /resume the java should return my homepage.html for / and my index.html for /resume
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/homepage.html');
});
app.get('/resume', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});