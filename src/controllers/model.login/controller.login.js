const express = require("express");

const HomeRoutes = express.Router();

HomeRoutes.get("/", function (req, res) {
  let email = req.session.email;
  res.render("auth/login", { user_email: email });
});

module.exports = { HomeRoutes: HomeRoutes };
