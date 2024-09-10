const uploadRotesRegist = require("express").Router();
const registerController = require("../model.login/index").register;
const verifyUser = require("../../database/config/verify");
uploadRotesRegist.get("/", verifyUser.isLogout, registerController.formRegister);
uploadRotesRegist.post("/save", verifyUser.isLogout, registerController.saveRegister);

module.exports = uploadRotesRegist;
