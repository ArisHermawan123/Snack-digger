const routerLogin = require("express").Router();
const loginController = require("./controller.login");
const verifyUser = require("../../database/config/verify");

routerLogin.get("/", verifyUser.isLogout, loginController.login);
routerLogin.get("/logout", loginController.logout);

routerLogin.post("/auth", loginController.loginAuth);

module.exports = routerLogin;
