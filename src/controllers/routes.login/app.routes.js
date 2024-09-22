const appRouter = require("express").Router();
const ControllerIndex = require("../model.login/index").home;
const ControllerHome = require("../model.login/index").home;
const ControllerProfile = require("../model.login/index").profile;
const VerifyUser = require("../../database/config/verify");

appRouter.get("/home", VerifyUser.isLogin, ControllerHome.home);
appRouter.get("/login", VerifyUser.isLogin, ControllerIndex.index);
appRouter.get("/profile", VerifyUser.isLogin, ControllerProfile.profile);

module.exports = appRouter;
