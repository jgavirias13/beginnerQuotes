const controller = require('../controllers/homeController');

module.exports = (router) => {
    router.get('/', controller.index);
    router.get('/about', controller.about);
};