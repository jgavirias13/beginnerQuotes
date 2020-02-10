const controller = require('../controllers/quoteController');

module.exports = (router) => {
    router.get('/quotes', controller.index);
}