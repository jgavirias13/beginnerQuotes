const util = require('./util');

class HomeController {
    async index(req, res){
        return util.render('home', res);
    }

    async about(req, res){
        return util.render('about', res);
    }
}

module.exports = new HomeController;