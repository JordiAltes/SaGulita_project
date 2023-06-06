const sered = require('sered');
const path = require('path');
const express = require('express');

const app = express();
const server = sered(app);

app.use(express.static(path.join(__dirname, 'build')));

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor sered en funcionamiento en el puerto ${port}`);
});