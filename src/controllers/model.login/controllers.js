const express = require("express");
const models = require("../../database/models/user");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const accountRoutes = express.Router();

accountRoutes.get("/login", function (req, res) {
  res.render("auth/login");
});

accountRoutes.post("/login", function (req, res) {
  const matched_users_promise = models.findAll({
    where: Sequelize.and({ email: req.body.email }),
  });
  matched_users_promise.then(function (users) {
    if (users.length > 0) {
      let user = users[0];
      let passwordHash = user.password;
      if (bcrypt.compareSync(req.body.password, passwordHash)) {
        req.session.email = req.body.email;
        res.redirect("/");
      } else {
        res.redirect("/login");
      }
    }
  });
});

module.exports = { AccountRoutes: accountRoutes };
