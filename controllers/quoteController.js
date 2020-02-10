const util = require('./util');
const path = require('path');
const db = require('../data/db.json');
const DBPATH = path.join(__dirname + '/../data/db.json');
const fs = require('fs');

class QuoteController{
    async index(req, res){
        return util.render('quotes', res);
    }

    async get(req, res){
        return res.send(db);
    }

    async add(req, res){
        const quote = req.body;
        const lastQuote = db[db.length - 1];
        if(lastQuote){
            const id = lastQuote.id;
            quote.id = id + 1;
        }else{
            quote.id = 1;
        }
        db.push(quote);
        fs.writeFileSync(DBPATH, JSON.stringify(db));
        return res.status(201).send("Agregado exitosamente");
    }
}

module.exports = new QuoteController();