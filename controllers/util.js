const path = require('path');

exports.render = (file, res) => {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}