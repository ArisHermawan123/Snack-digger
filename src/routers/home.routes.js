const router = require("express").Router();

module.exports = (app) => {
  router.get("/home", (req, res) => {
    res.render("home");
  });
  router.get("/home/shopping-cart/", (req, res) => {
    res.render("shopping-cart");
  });

  app.use("/", router);
};
