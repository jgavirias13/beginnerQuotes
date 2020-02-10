const util = require('./util');

class HomeController {
    async index(req, res) {
        return util.render('home', res);
    }
}

module.exports = new HomeController;