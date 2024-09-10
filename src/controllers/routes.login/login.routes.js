const uploadRotesLogin = require("express").Router();
const loginController = require("../model.login/controller.login");
const verifyUser = require("../../database/config/verify");

uploadRotesLogin.get("/login", verifyUser.isLogout, loginController.login);
uploadRotesLogin.get("/logout", loginController.logout);

uploadRotesLogin.post("/auth", loginController.loginAuth);

module.exports = uploadRotesLogin;
