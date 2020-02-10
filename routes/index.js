const homeRoutes = require('./homeRoutes');
const router = require('express').Router();

homeRoutes(router);

module.exports = router;