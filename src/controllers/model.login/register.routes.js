const routerRegist = require("express").Router();
const registerController = require("./controllers.regist");
const verifyUser = require("../../database/config/verify");

routerRegist.get("/", verifyUser.isLogout, registerController.formRegister);
routerRegist.post("/save", verifyUser.isLogout, registerController.saveRegister);

module.exports = routerRegist;
