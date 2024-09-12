const appRouter = require("express").Router();
const ControllerHome = require("../model.login/index").home;
const ControllerProfile = require("../model.login/index").profile;
const VerifyUser = require("../../database/config/verify");

appRouter.get("/", VerifyUser.isLogin, ControllerHome.home);
appRouter.get("/profile", VerifyUser.isLogin, ControllerProfile.profile);

module.exports = appRouter;
