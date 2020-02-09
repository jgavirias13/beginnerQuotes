const express = require('express');
const server = express();
const configs = require('./config/index');

//Configuracion de recursos estaticos
server.use(express.static('./public'));
server.use(express.json());

server.listen(configs.PORT, () => {
    console.log(`El servidor se encuentra escuchando en el ${configs.PORT}`);
});