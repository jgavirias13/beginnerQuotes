const express = require('express');
const server = express();
const configs = require('./config/index');



server.listen(configs.PORT, () => {
    console.log(`El servidor se encuentra escuchando en el ${configs.PORT}`);
});