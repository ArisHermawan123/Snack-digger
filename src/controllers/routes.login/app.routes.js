const uploadRotesApp = require("express").Router();
const homeController = require("../model.login/index").home;
const profileController = require("../model.login/index").profile;
const verifyUser = require("../../database/config/verify");

uploadRotesApp.get("/", homeController.home);
uploadRotesApp.get("/profile", verifyUser.isLogin, profileController.profile);

module.exports = uploadRotesApp;
