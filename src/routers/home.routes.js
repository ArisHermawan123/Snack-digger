const router = require("express").Router();

module.exports = (app) => {
  router.get("/home", (req, res) => {
    res.render("home");
  });

  app.use("/", router);
};
