/* const sered = require('sered');
const path = require('path');
const express = require('express');

const app = express();
const server = sered(app);

const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));

server.all('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor sered en funcionamiento en el puerto ${port}`);
}); */
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);