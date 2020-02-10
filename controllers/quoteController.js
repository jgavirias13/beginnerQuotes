const util = require('./util');
const path = require('path');
const db = require('../data/db.json');

class QuoteController{
    async index(req, res){
        return util.render('quotes', res);
    }
}

module.exports = new QuoteController();