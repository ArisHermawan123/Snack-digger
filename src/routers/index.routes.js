const router = require("express").Router();
require("dotenv").config();

module.exports = (app) => {
  router.get("/app", (req, res) => {
    res.render("home/index", {
      url: `${process.env.BASE_URL}\n/`,
    });
  });
  app.use("/", router);
};
