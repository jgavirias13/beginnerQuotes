const homeRoutes = require('./homeRoutes');
const quoteRoutes = require('./quoteRoutes');
const router = require('express').Router();

homeRoutes(router);
quoteRoutes(router);

module.exports = router;