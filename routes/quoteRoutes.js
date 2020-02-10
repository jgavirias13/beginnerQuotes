const controller = require("../controllers/quoteController");

module.exports = router => {
  router.get("/quotes", controller.index)
        .post("/quotes", controller.add);
  router.get("/quotes/all", controller.get);
};
