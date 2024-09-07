const router = require("express").Router();

module.exports = (app) => {
  router.get("/home", (req, res) => {
    res.render("home/home");
  });
  router.get("/home/shopping-cart/", (req, res) => {
    res.render("partials/shopping-cart");
  });
  router.get("/home/rec", (req, res) => {
    res.render("partials/recommend");
  });

  app.use("/", router);
};
