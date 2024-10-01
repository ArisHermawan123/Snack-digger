const LoginRouter = require("express").Router();
const ControllerLogin = require("../../controllers/model.login/index").login;
const VerifyUser = require("../../database/config/verify");

LoginRouter.get("/", VerifyUser.isLogout, ControllerLogin.login);
LoginRouter.get("/logout", ControllerLogin.logout);

LoginRouter.post("/auth", ControllerLogin.loginAuth);

module.exports = LoginRouter;
