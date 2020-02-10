const express = require('express');
const server = express();
const configs = require('./config');
const router = require('./routes');
const notFoundMid = require('./middlewares/notFound');

//Configuracion de recursos estaticos
server.use(express.static('./public'));
server.use(express.json());
server.use('/', router);
server.use(notFoundMid);

server.listen(configs.PORT, () => {
    console.log(`El servidor se encuentra escuchando en el ${configs.PORT}`);
});