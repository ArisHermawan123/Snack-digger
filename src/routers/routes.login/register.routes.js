const RegistRouter = require("express").Router();
const ControllerRegister = require("../../controllers/model.login/index").register;
const VerifyUser = require("../../database/config/verify");

RegistRouter.get("/", VerifyUser.isLogout, ControllerRegister.formRegister);
RegistRouter.post("/save", VerifyUser.isLogout, ControllerRegister.saveRegister);

module.exports = RegistRouter;
