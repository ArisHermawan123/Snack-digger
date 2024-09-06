const router = require("express").Router();

const Login = (app) => {
  router.get("/login", (req, res) => {
    res.render("login");
  });

  app.use("/", router);
};
module.exports = Login;
