class HomeController {
    async index(req, res) {
        return res.send("Pagina de inicio");
    }
}

module.exports = new HomeController;