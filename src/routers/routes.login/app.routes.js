const appRouter = require("express").Router();
const ControllerHome = require("../../controllers/model.login/index").home;
const ControllerProfile = require("../../controllers/model.login/index").profile;
const VerifyUser = require("../../database/config/verify");

appRouter.get("/home", VerifyUser.isLogin, ControllerHome.home);
appRouter.get("/profile", VerifyUser.isLogin, ControllerProfile.profile);

module.exports = appRouter;
