const routerApp = require("express").Router();
const homeController = require("./controller.home").home;
const profileController = require("./controller.porfile").profile;
const verifyUser = require("../../database/config/verify");

routerApp.get("/", verifyUser.isLogin, homeController);
routerApp.get("/profile", verifyUser.isLogin, profileController);

module.exports = routerApp;
