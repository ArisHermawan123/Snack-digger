const uploadRotesApp = require("express").Router();
const homeController = require("../model.login/controller.home").home;
const profileController = require("../model.login/controller.porfile").profile;
const verifyUser = require("../../database/config/verify");

uploadRotesApp.get("/", verifyUser.isLogin, homeController);
uploadRotesApp.get("/profile", verifyUser.isLogin, profileController);

module.exports = uploadRotesApp;
