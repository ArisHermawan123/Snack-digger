const express = require("express");
const accountRoutes = express.Router();
const controller = require("../model.login/controllers");

accountRoutes.get("/login", controller.FrontLogin);
accountRoutes.post("/login", controller.FrontRunLogin);

module.exports = accountRoutes;
